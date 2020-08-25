import { Injectable } from "@nestjs/common";
import { InvitesArgs, CreateInviteInput } from "../DTOs";
import { Invite } from "../Models";

@Injectable()
export class InviteService {
  /**
   * MOCK
   * Put some real business logic here
   */

  mockInviteData = {
    id: "0629fbd677fc474098e765cbad514757",
    user_id: "ec3f819ed1224e69ae082bf0d34a26ec",
    invited_email: "bekleyendavet@simurg.localhost",
    invited_user_id: null,
    status: "INVITED",
    created_at: "2020-07-26 17:42:15",
    updated_at: "2020-07-26 17:42:15"
  };

  async create(data: CreateInviteInput): Promise<Invite> {
    console.log(`Mutation Invite.create: ${JSON.stringify(data)}`);
    return this.mockInviteData as any;
  }

  async search(invitesArgs: InvitesArgs): Promise<Invite[]> {
    console.log(`Query Invite.search => ${JSON.stringify(invitesArgs)}`);
    return [this.mockInviteData] as Invite[];
  }
}
