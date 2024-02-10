export type TDisputeEventType = "CUSTOMER.DISPUTE.CREATED" | "CUSTOMER.DISPUTE.RESOLVED" | "CUSTOMER.DISPUTE.UPDATED";

export type TDisputeStatus =
  | "OPEN"
  | "WAITING_FOR_BUYER_RESPONSE"
  | "WAITING_FOR_SELLER_RESPONSE"
  | "UNDER_REVIEW"
  | "RESOLVED"
  | "OTHER";

export interface IDisputeMessage {
  posted_by: string;
  time_posted: Date;
  content: string;
}

export interface IPartnerDisputePayload {
  dispute_id: string;
  reason?: string;
  status?: TDisputeStatus;
  event_type?: TDisputeEventType;
  product_id?: number;
  product_name?: string;
  dispute_amount?: string;
  dispute_currency?: string;
  payer_id?: string;
  payer_email?: string;
  code?: string;
  code_used?: boolean;
  messages?: IDisputeMessage[];
  create_time?: Date;
  update_time?: Date;
}
