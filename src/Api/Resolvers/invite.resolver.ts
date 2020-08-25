import { NotFoundException } from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "apollo-server-express";
import { CreateInviteInput, InvitesArgs } from "../DTOs";
import { Invite } from "../Models";
import { InviteService } from "../Services";

const pubSub = new PubSub();

@Resolver((of) => InviteService)
export class InviteResolver {
  constructor(private readonly inviteService: InviteService) {}

  @Query((returns) => [Invite])
  invites(@Args() invitesArgs: InvitesArgs): Promise<Invite[]> {
    return this.inviteService.search(invitesArgs);
  }

  @Mutation((returns) => Invite)
  async createInvite(
    @Args("newInviteData") newInviteData: CreateInviteInput
  ): Promise<Invite> {
    const invite = await this.inviteService.create(newInviteData);
    console.log(
      `Subscription Invite.created: ${JSON.stringify({
        inviteCreated: Invite,
      })}`
    );
    pubSub.publish("InviteCreated", { inviteCreated: invite });
    return invite;
  }

  @Subscription((returns) => Invite)
  inviteCreated() {
    return pubSub.asyncIterator("InviteCreated");
  }
}
