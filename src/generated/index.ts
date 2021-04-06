import gql from 'graphql-tag';
import { useMutation, UseMutationOptions } from 'react-query';
import { fetchData } from '@/services/api/request';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Date` scalar type represents datetime format like `2020-12-31`, based on UTF-8 character sequences by extending the `String` type. */
  Date: any;
  DateTime: any;
  /** The `Email` scalar type represents an email, based on UTF-8 character sequences by extending the `String` type. */
  Email: any;
  /**
   * The `FileId` scalar type represents textual data for unique id based on UTF-8 character sequences (UUID or classic ID formats).
   *
   * **Format needed**: `/^([a-zA-Z0-9-]){5,50}$/`
   */
  FileId: any;
  /**
   * The `LongDescription` scalar type represents textual data for names based on UTF-8 character sequences.
   *
   * The string must have:
   *
   * -At least 5 characters
   *
   * -A maximum of 500 characters
   */
  LongDescription: any;
  /**
   * The `LongName` scalar type represents textual data for names based on UTF-8 character sequences.
   *
   * The string must have:
   *
   * -No special characters (without [-] and accentuation)
   *
   * -At least 2 characters
   *
   * -A maximum of 30 characters
   *
   *
   *
   * **Format needed**: `/^([a-zA-ZÀ-ÖØ-öø-ÿ- ']){2,30}$/`
   */
  LongName: any;
  /**
   * The `LongTitle` scalar type represents textual data for names based on UTF-8 character sequences.
   *
   * The string must have:
   *
   * -No special characters (without [-] and accentuation)
   *
   * -At least 2 characters
   *
   * -A maximum of 50 characters
   *
   *
   *
   * **Format needed**: `/^([- '°%&?!()a-zA-ZÀ-ÖØ-öø-ÿ0-9]){2,50}$/`
   */
  LongTitle: any;
  /**
   * The `Password` scalar type represents a password based on UTF-8 character sequences by extending the `String` type. The string must have:
   *
   * -At least six characters
   *
   * -At least 1 upper case letter
   *
   * -At least 1 lower case English letter
   *
   * -At least 1 digit
   *
   * -At least 1 special character
   *
   *
   *
   * **Format needed**: `/^(?=S*[a-z])(?=S*[A-Z])(?=S*d)(?=S*[^ws])S{6,}$/`
   */
  Password: any;
  /**
   * The `PhoneCode` scalar type represents textual data for names based on UTF-8 character sequences.
   *
   * The string must have:
   *
   * - 4 numbers (string format)
   */
  PhoneCode: any;
  /**
   * The `PhoneIndex` scalar type represents textual data for phone indexes (country codes) based on UTF-8 character sequences.
   *
   * **Format needed**: `/^(+)+[0-9-]*$/`
   */
  PhoneIndex: any;
  /** The `PhoneNumber` scalar type represents textual data for phone number (without phone index) based on UTF-8 character sequences. */
  PhoneNumber: any;
  /**
   * The `ShortDescription` scalar type represents textual data for names based on UTF-8 character sequences.
   *
   * The string must have:
   *
   * -At least 5 characters
   *
   * -A maximum of 200 characters
   */
  ShortDescription: any;
  /**
   * The `ShortName` scalar type represents textual data for names based on UTF-8 character sequences.
   *
   * The string must have:
   *
   * -No special characters (without [-] and accentuation)
   *
   * -At least 2 characters
   *
   * -A maximum of 20 characters
   *
   *
   *
   * **Format needed**: `/^([a-zA-ZÀ-ÖØ-öø-ÿ- ]){2,20}$/`
   */
  ShortName: any;
  /**
   * The `LongTitle` scalar type represents textual data for names based on UTF-8 character sequences.
   *
   * The string must have:
   *
   * -No special characters (without [-] and accentuation)
   *
   * -At least 2 characters
   *
   * -A maximum of 30 characters
   *
   *
   *
   * **Format needed**: `/^([- '°%&?!()a-zA-ZÀ-ÖØ-öø-ÿ0-9]){2,30}$/`
   */
  ShortTitle: any;
  /**
   * The `StringCode` scalar type represents textual data for names based on UTF-8 character sequences.
   *
   * **Format needed**: `/^([A-Z0-9_]){3,20}$/`
   */
  StringCode: any;
  /** The `Url` scalar type represents textual data for url based on UTF-8 character sequences. */
  Url: any;
  /**
   * The `Uuid` scalar type represents textual data for unique ids based on UTF-8 character sequences.
   *
   * **Format needed**: `/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/`
   */
  Uuid: any;
};

export type AccessTokenExpiredError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type AccessTokenResult = {
  accessToken: Scalars['String'];
  expiresIn: Scalars['Int'];
  refreshToken: Scalars['String'];
  user: User;
};

export type AudioMedia = {
  id: Scalars['Int'];
  fileId: Scalars['String'];
  status: FileStatus;
  duration: Scalars['Float'];
  type: CloudType;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type AudioMediaListRelationFilter = {
  every?: Maybe<AudioMediaWhereInput>;
  some?: Maybe<AudioMediaWhereInput>;
  none?: Maybe<AudioMediaWhereInput>;
};

export type AudioMediaResult = MediaInterface & {
  url: Scalars['String'];
  audio?: Maybe<AudioMedia>;
};

export type AudioMediaWhereInput = {
  AND?: Maybe<Array<AudioMediaWhereInput>>;
  OR?: Maybe<Array<AudioMediaWhereInput>>;
  NOT?: Maybe<Array<AudioMediaWhereInput>>;
  id?: Maybe<IntFilter>;
  status?: Maybe<EnumFileStatusFilter>;
  fileId?: Maybe<StringFilter>;
  type?: Maybe<EnumCloudTypeFilter>;
  duration?: Maybe<FloatNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
  chatMessage?: Maybe<ChatMessageWhereInput>;
  chatMessageId?: Maybe<IntNullableFilter>;
  community?: Maybe<CommunityWhereInput>;
  communityId?: Maybe<IntNullableFilter>;
  chatRoom?: Maybe<ChatRoomWhereInput>;
  chatRoomId?: Maybe<IntNullableFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntNullableFilter>;
};

export type Block = {
  id: Scalars['Int'];
  isBlocked: Scalars['Boolean'];
  blockerUser: User;
  blockedUser: User;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type BlockListRelationFilter = {
  every?: Maybe<BlockWhereInput>;
  some?: Maybe<BlockWhereInput>;
  none?: Maybe<BlockWhereInput>;
};

export type BlockNotFoundError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type BlockOrderByInput = {
  id?: Maybe<SortOrder>;
  isBlocked?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  blockerUserId?: Maybe<SortOrder>;
  blockedUserId?: Maybe<SortOrder>;
};

export type BlockResult = {
  isBlocked: Scalars['Boolean'];
};

export type BlockResults = {
  blocks: Array<Block>;
};

export type BlockUserPayload = BlockResult | GenericError | NotAuthorizedError | InputError | UserNotFoundError | UserAlreadyBlockedError;

export type BlockWhereInput = {
  AND?: Maybe<Array<BlockWhereInput>>;
  OR?: Maybe<Array<BlockWhereInput>>;
  NOT?: Maybe<Array<BlockWhereInput>>;
  id?: Maybe<IntFilter>;
  isBlocked?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
  blockerUser?: Maybe<UserWhereInput>;
  blockerUserId?: Maybe<IntFilter>;
  blockedUser?: Maybe<UserWhereInput>;
  blockedUserId?: Maybe<IntFilter>;
};

export type BlockWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type BlocksPayload = BlockResults | GenericError | NotAuthorizedError | InputError;

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type ChatMessage = {
  id: Scalars['Int'];
  type: ChatMessageType;
  text?: Maybe<Scalars['String']>;
  picture?: Maybe<PictureMedia>;
  video?: Maybe<VideoMedia>;
  audio?: Maybe<AudioMedia>;
  user: User;
  chatRoom: ChatRoom;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ChatMessageAlreadyDeletedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type ChatMessageDeletePayload = DeletedResult | GenericError | NotAuthorizedError | InputError | ChatMessageNotFoundError | ChatMessageAlreadyDeletedError;

export type ChatMessageListRelationFilter = {
  every?: Maybe<ChatMessageWhereInput>;
  some?: Maybe<ChatMessageWhereInput>;
  none?: Maybe<ChatMessageWhereInput>;
};

export type ChatMessageNotFoundError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type ChatMessageOrderByInput = {
  id?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  chatRoomId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type ChatMessageResult = {
  chatMessage: ChatMessage;
};

export type ChatMessageResults = {
  chatMessages: Array<ChatMessage>;
};

export type ChatMessageSendInput = {
  text?: Maybe<Scalars['String']>;
  videoFileId?: Maybe<Scalars['FileId']>;
  audioFileId?: Maybe<Scalars['FileId']>;
  pictureFileId?: Maybe<Scalars['FileId']>;
};

export type ChatMessageSendPayload = ChatMessageResult | GenericError | NotAuthorizedError | InputError | FileNotFoundError | ChatRoomNotFoundError | ChatMessageTextNotAllowedError;

export type ChatMessageTextNotAllowedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export enum ChatMessageType {
  Basic = 'BASIC',
  Attachment = 'ATTACHMENT'
}

export type ChatMessageWhereInput = {
  AND?: Maybe<Array<ChatMessageWhereInput>>;
  OR?: Maybe<Array<ChatMessageWhereInput>>;
  NOT?: Maybe<Array<ChatMessageWhereInput>>;
  id?: Maybe<IntFilter>;
  type?: Maybe<EnumChatMessageTypeFilter>;
  text?: Maybe<StringNullableFilter>;
  picture?: Maybe<PictureMediaWhereInput>;
  video?: Maybe<VideoMediaWhereInput>;
  audio?: Maybe<AudioMediaWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
  chatRoom?: Maybe<ChatRoomWhereInput>;
  chatRoomId?: Maybe<IntFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
};

export type ChatMessageWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ChatMessagesPayload = ChatMessageResults | GenericError | NotAuthorizedError | InputError;

export type ChatRoom = {
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<PictureMedia>;
  users: Array<User>;
  countUsers: Scalars['Int'];
  countMessages: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  lastMessageSendedAt?: Maybe<Scalars['DateTime']>;
  unreadMessagesCounter: Scalars['Int'];
  lastMessage?: Maybe<ChatMessage>;
};

export type ChatRoomCreateInput = {
  name?: Maybe<Scalars['String']>;
  coverFileId?: Maybe<Scalars['FileId']>;
  userIds: Array<Maybe<Scalars['Int']>>;
};

export type ChatRoomCreatePayload = ChatRoomCreateResult | GenericError | NotAuthorizedError | InputError | UserNotFoundError | UserNotFollowAuthorizationError | FileNotFoundError | ChatRoomMaximumParticipantsReachedError;

export type ChatRoomCreateResult = {
  chatRoom: ChatRoom;
  isNewChatRoom: Scalars['Boolean'];
};

export type ChatRoomListRelationFilter = {
  every?: Maybe<ChatRoomWhereInput>;
  some?: Maybe<ChatRoomWhereInput>;
  none?: Maybe<ChatRoomWhereInput>;
};

export type ChatRoomMaximumParticipantsReachedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type ChatRoomNotFoundError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type ChatRoomOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  socketConnectionId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  lastMessageSendedAt?: Maybe<SortOrder>;
  countUsers?: Maybe<SortOrder>;
  countMessages?: Maybe<SortOrder>;
};

export type ChatRoomResetUnreadMessagesPayload = ChatRoomResetUnreadMessagesResult | GenericError | NotAuthorizedError | InputError | ChatRoomNotFoundError;

export type ChatRoomResetUnreadMessagesResult = {
  isReset: Scalars['Boolean'];
};

export type ChatRoomResult = {
  chatRoom: ChatRoom;
};

export type ChatRoomResults = {
  chatRooms: Array<ChatRoom>;
};

export type ChatRoomUpdateInput = {
  name?: Maybe<Scalars['String']>;
  coverFileId?: Maybe<Scalars['FileId']>;
  userIdsToAdd?: Maybe<Array<Maybe<Scalars['Int']>>>;
  userIdsToRemove?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ChatRoomUpdatePayload = ChatRoomResult | GenericError | NotAuthorizedError | InputError | UserNotFoundError | UserNotFollowAuthorizationError | ChatRoomNotFoundError | FileNotFoundError | ChatRoomUserAlreadyAddedError | ChatRoomUserAlreadyRemovedError | ChatRoomMaximumParticipantsReachedError;

export type ChatRoomUserAlreadyAddedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type ChatRoomUserAlreadyRemovedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type ChatRoomUserProfile = {
  id: Scalars['Int'];
  pseudo?: Maybe<Scalars['String']>;
  isOnlineInsideChatRoom: Scalars['Boolean'];
  unreadMessagesCounter: Scalars['Int'];
  user: User;
  chatRoom: ChatRoom;
};

export type ChatRoomUserProfileListRelationFilter = {
  every?: Maybe<ChatRoomUserProfileWhereInput>;
  some?: Maybe<ChatRoomUserProfileWhereInput>;
  none?: Maybe<ChatRoomUserProfileWhereInput>;
};

export type ChatRoomUserProfileWhereInput = {
  AND?: Maybe<Array<ChatRoomUserProfileWhereInput>>;
  OR?: Maybe<Array<ChatRoomUserProfileWhereInput>>;
  NOT?: Maybe<Array<ChatRoomUserProfileWhereInput>>;
  id?: Maybe<IntFilter>;
  pseudo?: Maybe<StringNullableFilter>;
  isOnlineInsideChatRoom?: Maybe<BoolNullableFilter>;
  unreadMessagesCounter?: Maybe<IntFilter>;
  chatRoom?: Maybe<ChatRoomWhereInput>;
  chatRoomId?: Maybe<IntFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
};

export type ChatRoomWhereInput = {
  AND?: Maybe<Array<ChatRoomWhereInput>>;
  OR?: Maybe<Array<ChatRoomWhereInput>>;
  NOT?: Maybe<Array<ChatRoomWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  covers?: Maybe<PictureMediaListRelationFilter>;
  socketConnectionId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
  lastMessageSendedAt?: Maybe<DateTimeNullableFilter>;
  countUsers?: Maybe<IntFilter>;
  countMessages?: Maybe<IntFilter>;
  users?: Maybe<UserListRelationFilter>;
  chatMessages?: Maybe<ChatMessageListRelationFilter>;
  chatRoomUserProfiles?: Maybe<ChatRoomUserProfileListRelationFilter>;
  videos?: Maybe<VideoMediaListRelationFilter>;
  audios?: Maybe<AudioMediaListRelationFilter>;
  pictures?: Maybe<PictureMediaListRelationFilter>;
};

export type ChatRoomWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ChatRoomsPayload = ChatRoomResults | GenericError | NotAuthorizedError | InputError;

export type ChatSubDeleteMessageEvent = SubscriptionInterface & {
  action: Scalars['String'];
  subscriptionSource: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  chatMessage: ChatMessage;
};

export type ChatSubPayload = ChatSubDeleteMessageEvent | ChatSubSendMessageEvent | GenericError | NotAuthorizedError | InputError | ChatRoomNotFoundError;

export type ChatSubSendMessageEvent = SubscriptionInterface & {
  action: Scalars['String'];
  subscriptionSource: Scalars['String'];
  isSended: Scalars['Boolean'];
  chatMessage: ChatMessage;
};

export enum CloudType {
  Cloudflare = 'CLOUDFLARE',
  AwsS3 = 'AWS_S3'
}

export type CommunitiesPayload = CommunityResults | GenericError | NotAuthorizedError | InputError;

export type Community = {
  id: Scalars['Int'];
  name: Scalars['String'];
  cover?: Maybe<PictureMedia>;
  description: Scalars['String'];
  isBanned: Scalars['Boolean'];
  countMembers: Scalars['Int'];
  countEpisodes: Scalars['Int'];
  privacyMode: CommunityPrivacyMode;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  bannedAt?: Maybe<Scalars['DateTime']>;
  interests: Array<Interest>;
  videoCommunityTrailer?: Maybe<VideoCommunityTrailer>;
};

export type CommunityAlreadyDeletedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type CommunityAlreadyJoinedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type CommunityAlreadyLeftError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type CommunityCreateInput = {
  name: Scalars['LongName'];
  description: Scalars['String'];
  privacyMode: PrivacyMode;
  interestIds: Array<Maybe<Scalars['Int']>>;
  coverFileId?: Maybe<Scalars['FileId']>;
};

export type CommunityCreatePayload = CommunityResult | GenericError | NotAuthorizedError | InputError | InterestNotFoundError | CommunityNameAlreadyTakenError | FileNotFoundError | UserNotFoundError;

export type CommunityDeletePayload = DeletedResult | GenericError | NotAuthorizedError | InputError | CommunityNotFoundError | CommunityRoleNotAuthorizedError | CommunityAlreadyDeletedError;

export type CommunityListRelationFilter = {
  every?: Maybe<CommunityWhereInput>;
  some?: Maybe<CommunityWhereInput>;
  none?: Maybe<CommunityWhereInput>;
};

export type CommunityMembership = {
  id: Scalars['Int'];
  user: User;
  community: Community;
  isActive: Scalars['Boolean'];
  role: CommunityMembershipRole;
  isBanned: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  bannedAt?: Maybe<Scalars['DateTime']>;
};

export type CommunityMembershipListRelationFilter = {
  every?: Maybe<CommunityMembershipWhereInput>;
  some?: Maybe<CommunityMembershipWhereInput>;
  none?: Maybe<CommunityMembershipWhereInput>;
};

export type CommunityMembershipNotFoundError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type CommunityMembershipOrderByInput = {
  id?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  isActive?: Maybe<SortOrder>;
  isBanned?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  bannedAt?: Maybe<SortOrder>;
  communityId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type CommunityMembershipResult = {
  communityMembership: CommunityMembership;
};

export type CommunityMembershipResults = {
  communityMemberships: Array<CommunityMembership>;
};

export enum CommunityMembershipRole {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  User = 'USER'
}

export type CommunityMembershipSubscribePayload = CommunityMembershipResult | GenericError | NotAuthorizedError | InputError | CommunityNotFoundError;

export type CommunityMembershipWhereInput = {
  AND?: Maybe<Array<CommunityMembershipWhereInput>>;
  OR?: Maybe<Array<CommunityMembershipWhereInput>>;
  NOT?: Maybe<Array<CommunityMembershipWhereInput>>;
  id?: Maybe<IntFilter>;
  role?: Maybe<EnumCommunityMembershipRoleFilter>;
  isActive?: Maybe<BoolFilter>;
  isBanned?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
  bannedAt?: Maybe<DateTimeNullableFilter>;
  community?: Maybe<CommunityWhereInput>;
  communityId?: Maybe<IntFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
};

export type CommunityMembershipWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type CommunityMembershipsPayload = CommunityMembershipResults | GenericError | NotAuthorizedError | InputError;

export type CommunityNameAlreadyTakenError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type CommunityNotFoundError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type CommunityOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  isBanned?: Maybe<SortOrder>;
  countEpisodes?: Maybe<SortOrder>;
  countMembers?: Maybe<SortOrder>;
  privacyMode?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  bannedAt?: Maybe<SortOrder>;
};

export type CommunityPayload = CommunityResult | GenericError | NotAuthorizedError | InputError | CommunityNotFoundError;

export enum CommunityPrivacyMode {
  Public = 'PUBLIC',
  SemiPublic = 'SEMI_PUBLIC',
  Private = 'PRIVATE'
}

export type CommunityResult = {
  community: Community;
};

export type CommunityResults = {
  communities: Array<Community>;
};

export type CommunityRoleNotAuthorizedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type CommunityTrailersDiscoverPayload = VideoCommunityTrailerResults | GenericError | NotAuthorizedError | InputError;

export type CommunityWhereInput = {
  AND?: Maybe<Array<CommunityWhereInput>>;
  OR?: Maybe<Array<CommunityWhereInput>>;
  NOT?: Maybe<Array<CommunityWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  covers?: Maybe<PictureMediaListRelationFilter>;
  description?: Maybe<StringFilter>;
  isBanned?: Maybe<BoolFilter>;
  countEpisodes?: Maybe<IntFilter>;
  countMembers?: Maybe<IntFilter>;
  privacyMode?: Maybe<EnumCommunityPrivacyModeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
  bannedAt?: Maybe<DateTimeNullableFilter>;
  interests?: Maybe<InterestListRelationFilter>;
  videoCommunityTrailers?: Maybe<VideoCommunityTrailerListRelationFilter>;
  videoEpisodes?: Maybe<VideoEpisodeListRelationFilter>;
  reports?: Maybe<ReportListRelationFilter>;
  communityMemberships?: Maybe<CommunityMembershipListRelationFilter>;
  videos?: Maybe<VideoMediaListRelationFilter>;
  audios?: Maybe<AudioMediaListRelationFilter>;
  pictures?: Maybe<PictureMediaListRelationFilter>;
};

export type CommunityWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};



export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type DeletedResult = {
  isDeleted: Scalars['Boolean'];
};

export enum DeviceType {
  Android = 'ANDROID',
  Ios = 'IOS',
  Browser = 'BROWSER'
}

export type DeviceTypeHeaderIsMissingError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};


export type EnumChatMessageTypeFilter = {
  equals?: Maybe<ChatMessageType>;
  in?: Maybe<Array<ChatMessageType>>;
  notIn?: Maybe<Array<ChatMessageType>>;
  not?: Maybe<NestedEnumChatMessageTypeFilter>;
};

export type EnumCloudTypeFilter = {
  equals?: Maybe<CloudType>;
  in?: Maybe<Array<CloudType>>;
  notIn?: Maybe<Array<CloudType>>;
  not?: Maybe<NestedEnumCloudTypeFilter>;
};

export type EnumCommunityMembershipRoleFilter = {
  equals?: Maybe<CommunityMembershipRole>;
  in?: Maybe<Array<CommunityMembershipRole>>;
  notIn?: Maybe<Array<CommunityMembershipRole>>;
  not?: Maybe<NestedEnumCommunityMembershipRoleFilter>;
};

export type EnumCommunityPrivacyModeFilter = {
  equals?: Maybe<CommunityPrivacyMode>;
  in?: Maybe<Array<CommunityPrivacyMode>>;
  notIn?: Maybe<Array<CommunityPrivacyMode>>;
  not?: Maybe<NestedEnumCommunityPrivacyModeFilter>;
};

export type EnumDeviceTypeNullableFilter = {
  equals?: Maybe<DeviceType>;
  in?: Maybe<Array<DeviceType>>;
  notIn?: Maybe<Array<DeviceType>>;
  not?: Maybe<NestedEnumDeviceTypeNullableFilter>;
};

export type EnumFileStatusFilter = {
  equals?: Maybe<FileStatus>;
  in?: Maybe<Array<FileStatus>>;
  notIn?: Maybe<Array<FileStatus>>;
  not?: Maybe<NestedEnumFileStatusFilter>;
};

export type EnumLiveRoomStatusFilter = {
  equals?: Maybe<LiveRoomStatus>;
  in?: Maybe<Array<LiveRoomStatus>>;
  notIn?: Maybe<Array<LiveRoomStatus>>;
  not?: Maybe<NestedEnumLiveRoomStatusFilter>;
};

export type EnumLocaleFilter = {
  equals?: Maybe<Locale>;
  in?: Maybe<Array<Locale>>;
  notIn?: Maybe<Array<Locale>>;
  not?: Maybe<NestedEnumLocaleFilter>;
};

export type EnumReportTypeFilter = {
  equals?: Maybe<ReportType>;
  in?: Maybe<Array<ReportType>>;
  notIn?: Maybe<Array<ReportType>>;
  not?: Maybe<NestedEnumReportTypeFilter>;
};

export type EnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
};

export type EnumVerificationStatusFilter = {
  equals?: Maybe<VerificationStatus>;
  in?: Maybe<Array<VerificationStatus>>;
  notIn?: Maybe<Array<VerificationStatus>>;
  not?: Maybe<NestedEnumVerificationStatusFilter>;
};

export type EpisodesByCommunityPayload = VideoEpisodeResults | CommunityNotFoundError | GenericError | NotAuthorizedError | InputError;

export type ErrorInterface = {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type FileAlreadyAttachedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type FileBadStatusError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type FileConversionError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type FileCreateSignedUploadUrlInput = {
  fileType: FileType;
};

export type FileCreateSignedUploadUrlPayload = VideoMediaResult | PictureMediaResult | AudioMediaResult | GenericError | NotAuthorizedError | InputError | FileTypeNotFoundError | FileIdAlreadyExistsError;


export type FileIdAlreadyExistsError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type FileNotFoundError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export enum FileStatus {
  Online = 'ONLINE',
  Offline = 'OFFLINE',
  Init = 'INIT',
  Error = 'ERROR'
}

export enum FileType {
  Video = 'VIDEO',
  Picture = 'PICTURE',
  Audio = 'AUDIO'
}

export type FileTypeNotFoundError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type FloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type GenericError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type InputError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type Interest = {
  id: Scalars['Int'];
  key: Scalars['String'];
  category: InterestCategory;
  value: Scalars['String'];
};

export type InterestCategory = {
  id: Scalars['Int'];
  key: Scalars['String'];
  interests: Array<Interest>;
  value: Scalars['String'];
};


export type InterestCategoryInterestsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<InterestWhereUniqueInput>;
  after?: Maybe<InterestWhereUniqueInput>;
};

export type InterestCategoryOrderByInput = {
  id?: Maybe<SortOrder>;
  key?: Maybe<SortOrder>;
};

export type InterestCategoryResults = {
  categories: Array<InterestCategory>;
};

export type InterestCategoryWhereInput = {
  AND?: Maybe<Array<InterestCategoryWhereInput>>;
  OR?: Maybe<Array<InterestCategoryWhereInput>>;
  NOT?: Maybe<Array<InterestCategoryWhereInput>>;
  id?: Maybe<IntFilter>;
  key?: Maybe<StringFilter>;
  interests?: Maybe<InterestListRelationFilter>;
};

export type InterestCategoryWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type InterestListRelationFilter = {
  every?: Maybe<InterestWhereInput>;
  some?: Maybe<InterestWhereInput>;
  none?: Maybe<InterestWhereInput>;
};

export type InterestNotFoundError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type InterestWhereInput = {
  AND?: Maybe<Array<InterestWhereInput>>;
  OR?: Maybe<Array<InterestWhereInput>>;
  NOT?: Maybe<Array<InterestWhereInput>>;
  id?: Maybe<IntFilter>;
  key?: Maybe<StringFilter>;
  category?: Maybe<InterestCategoryWhereInput>;
  categoryId?: Maybe<IntFilter>;
  users?: Maybe<UserListRelationFilter>;
  communities?: Maybe<CommunityListRelationFilter>;
};

export type InterestWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type LiveAskRecordSubEvent = SubscriptionInterface & {
  action: Scalars['String'];
  subscriptionSource: Scalars['String'];
  isSended: Scalars['Boolean'];
};

export enum LiveMode {
  Call = 'CALL',
  Record = 'RECORD'
}

export type LiveResponseRecordSubEvent = SubscriptionInterface & {
  action: Scalars['String'];
  subscriptionSource: Scalars['String'];
  isRecordAccepted: Scalars['Boolean'];
};

export type LiveRoom = {
  id: Scalars['Int'];
  name: Scalars['String'];
  socketConnectionId: Scalars['String'];
  status: LiveRoomStatus;
  countParticipants: Scalars['Int'];
  participants: Array<User>;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};


export type LiveRoomParticipantsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};

export type LiveRoomCreateInput = {
  mode: LiveMode;
};

export type LiveRoomCreatePayload = LiveRoomResult | GenericError | NotAuthorizedError | InputError;

export type LiveRoomInvitePayload = NotificationResult | GenericError | NotAuthorizedError | InputError | UserNotFoundError | UserNotAvailableError | UserNotLoggedError | LiveRoomNotFoundError;

export type LiveRoomKickResult = {
  isKicked: Scalars['Boolean'];
};

export type LiveRoomListRelationFilter = {
  every?: Maybe<LiveRoomWhereInput>;
  some?: Maybe<LiveRoomWhereInput>;
  none?: Maybe<LiveRoomWhereInput>;
};

export type LiveRoomMaximumParticipantsReachedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type LiveRoomNotActiveError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type LiveRoomNotFoundError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type LiveRoomRecordPermissionAskPayload = LiveRoomRecordPermissionAskResult | GenericError | NotAuthorizedError | InputError | LiveRoomNotFoundError;

export type LiveRoomRecordPermissionAskResult = {
  permissionAsked: Scalars['Boolean'];
};

export type LiveRoomRecordPermissionResponseInput = {
  permissionResponse: Scalars['Boolean'];
};

export type LiveRoomRecordPermissionResponsePayload = LiveRoomRecordPermissionResponseResult | GenericError | NotAuthorizedError | InputError | LiveRoomNotFoundError;

export type LiveRoomRecordPermissionResponseResult = {
  permissionResponse: Scalars['Boolean'];
};

export type LiveRoomResult = {
  liveRoom: LiveRoom;
  liveRoomUserToken: Scalars['String'];
};

export enum LiveRoomStatus {
  Init = 'INIT',
  Call = 'CALL',
  Record = 'RECORD',
  Completed = 'COMPLETED',
  Failed = 'FAILED'
}

export type LiveRoomStopPayload = LiveRoomStopResult | GenericError | NotAuthorizedError | InputError | LiveRoomNotFoundError | LiveRoomNotActiveError;

export type LiveRoomStopResult = {
  liveRoom: LiveRoom;
};

export type LiveRoomUserNotFoundError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type LiveRoomWhereInput = {
  AND?: Maybe<Array<LiveRoomWhereInput>>;
  OR?: Maybe<Array<LiveRoomWhereInput>>;
  NOT?: Maybe<Array<LiveRoomWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  socketConnectionId?: Maybe<StringFilter>;
  status?: Maybe<EnumLiveRoomStatusFilter>;
  countParticipants?: Maybe<IntFilter>;
  participants?: Maybe<UserListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
};

export type LiveStopSubEvent = SubscriptionInterface & {
  action: Scalars['String'];
  subscriptionSource: Scalars['String'];
  isLiveRoomActive: Scalars['Boolean'];
};

export type LiveSubPayload = LiveStopSubEvent | LiveAskRecordSubEvent | LiveResponseRecordSubEvent | GenericError | NotAuthorizedError | InputError | LiveRoomNotFoundError;

export enum Locale {
  En = 'EN',
  Fr = 'FR'
}

export enum LocaleType {
  En = 'EN',
  Fr = 'FR'
}




export type LookingFor = {
  id: Scalars['Int'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type LookingForListRelationFilter = {
  every?: Maybe<LookingForWhereInput>;
  some?: Maybe<LookingForWhereInput>;
  none?: Maybe<LookingForWhereInput>;
};

export type LookingForNotFoundError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type LookingForOrderByInput = {
  id?: Maybe<SortOrder>;
  key?: Maybe<SortOrder>;
};

export type LookingForResults = {
  lookingFors: Array<LookingFor>;
};

export type LookingForWhereInput = {
  AND?: Maybe<Array<LookingForWhereInput>>;
  OR?: Maybe<Array<LookingForWhereInput>>;
  NOT?: Maybe<Array<LookingForWhereInput>>;
  id?: Maybe<IntFilter>;
  key?: Maybe<StringFilter>;
  users?: Maybe<UserListRelationFilter>;
};

export type LookingForWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type LookingForsPayload = LookingForResults | GenericError | NotAuthorizedError | InputError;

export type MediaInterface = {
  url: Scalars['String'];
};

export type Mutation = {
  /** **Authentication**: `USER` */
  blockUser?: Maybe<BlockUserPayload>;
  /** **Authentication**: `USER` */
  unblockUser?: Maybe<UnblockUserPayload>;
  /** **Authentication**: `USER` */
  chatMessageDelete?: Maybe<ChatMessageDeletePayload>;
  /** **Authentication**: `USER` */
  chatMessageSend?: Maybe<ChatMessageSendPayload>;
  /** **Authentication**: `USER` */
  chatRoomCreate?: Maybe<ChatRoomCreatePayload>;
  /** **Authentication**: `USER` */
  chatRoomResetUnreadMessages?: Maybe<ChatRoomResetUnreadMessagesPayload>;
  /** **Authentication**: `USER` */
  chatRoomUpdate?: Maybe<ChatRoomUpdatePayload>;
  /** **Authentication**: `MODERATOR`, `ADMIN` */
  communityCreate?: Maybe<CommunityCreatePayload>;
  /** **Authentication**: `USER` */
  communityDelete?: Maybe<CommunityDeletePayload>;
  /** **Authentication**: `USER` */
  communityMembershipSubscribe?: Maybe<CommunityMembershipSubscribePayload>;
  /** **Authentication**: `USER` */
  communityUpdate?: Maybe<CommunityUpdatePayload>;
  /** **Authentication**: `USER` */
  fileCreateSignedUploadUrl?: Maybe<FileCreateSignedUploadUrlPayload>;
  /** **Authentication**: `USER` */
  notificationPushSend?: Maybe<NotificationPushSendPayload>;
  /** **Authentication**: `USER` */
  reportCommunity?: Maybe<ReportCommunityPayload>;
  /** **Authentication**: `USER` */
  reportUser?: Maybe<ReportUserPayload>;
  /** **Authentication**: `USER` */
  reportVideo?: Maybe<ReportVideoPayload>;
  /** **Authentication**: `USER` */
  unreportCommunity?: Maybe<UnreportCommunityPayload>;
  /** **Authentication**: `USER` */
  unreportUser?: Maybe<UnreportUserPayload>;
  /** **Authentication**: `USER` */
  unreportVideo?: Maybe<UnreportVideoPayload>;
  /** **Authentication**: `USER` */
  userDelete?: Maybe<UserDeletePayload>;
  /** **Authentication**: `USER` */
  userFollow?: Maybe<UserFollowPayload>;
  /** **Authentication**: N/A */
  userRefreshToken?: Maybe<UserRefreshTokenPayload>;
  /** **Authentication**: `USER` */
  userResetUnreadFollows?: Maybe<UserResetUnreadFollowsPayload>;
  /** **Authentication**: `NO` */
  userSignFull?: Maybe<UserSignFullPayload>;
  /** **Authentication**: `NO` */
  userSignInConfirm?: Maybe<UserSignInConfirmPayload>;
  /** **Authentication**: `USER` */
  userSignOut?: Maybe<UserSignOutPayload>;
  /** **Authentication**: `NO` */
  userSignUpConfirm?: Maybe<UserSignUpConfirmPayload>;
  /** **Authentication**: `USER` */
  userSponsorCodeCreate?: Maybe<UserSponsorCodeCreatePayload>;
  /** **Authentication**: `USER` */
  userSponsorCodeValid?: Maybe<UserSponsorCodeValidPayload>;
  /** **Authentication**: `USER` */
  userUnfollow?: Maybe<UserUnfollowPayload>;
  /** **Authentication**: `USER` */
  userUpdate?: Maybe<UserUpdatePayload>;
  /** **Authentication**: `USER` */
  videoCommunityTrailerCreate?: Maybe<VideoCommunityTrailerCreatePayload>;
  /** **Authentication**: `USER` */
  videoCommunityTrailerDelete?: Maybe<VideoCommunityTrailerDeletePayload>;
  /** **Authentication**: `USER` */
  videoEpisodeCreate?: Maybe<VideoEpisodeCreatePayload>;
  /** **Authentication**: `USER` */
  videoEpisodeDelete?: Maybe<VideoEpisodeDeletePayload>;
  /** **Authentication**: `USER` */
  videoEpisodeUpdate?: Maybe<VideoEpisodeUpdatePayload>;
  /** **Authentication**: `USER` */
  liveRoomCreate?: Maybe<LiveRoomCreatePayload>;
  /** **Authentication**: `USER` */
  liveRoomInvite?: Maybe<LiveRoomInvitePayload>;
  /** **Authentication**: `USER` */
  LiveRoomRecordPermissionAsk?: Maybe<LiveRoomRecordPermissionAskPayload>;
  /** **Authentication**: `USER` */
  liveRoomRecordPermissionResponse?: Maybe<LiveRoomRecordPermissionResponsePayload>;
  /** **Authentication**: `USER` */
  liveRoomStop?: Maybe<LiveRoomStopPayload>;
  /** **Authentication**: `USER` */
  videoUserTrailerCreate?: Maybe<VideoUserTrailerCreatePayload>;
  /** **Authentication**: `USER` */
  videoUserTrailerDelete?: Maybe<VideoUserTrailerDeletePayload>;
};


export type MutationBlockUserArgs = {
  userId: Scalars['Int'];
};


export type MutationUnblockUserArgs = {
  userId: Scalars['Int'];
};


export type MutationChatMessageDeleteArgs = {
  chatMessageId: Scalars['Int'];
};


export type MutationChatMessageSendArgs = {
  chatRoomId: Scalars['Int'];
  data: ChatMessageSendInput;
};


export type MutationChatRoomCreateArgs = {
  data: ChatRoomCreateInput;
};


export type MutationChatRoomResetUnreadMessagesArgs = {
  chatRoomId: Scalars['Int'];
};


export type MutationChatRoomUpdateArgs = {
  chatRoomId: Scalars['Int'];
  data: ChatRoomUpdateInput;
};


export type MutationCommunityCreateArgs = {
  userId: Scalars['Int'];
  data: CommunityCreateInput;
};


export type MutationCommunityDeleteArgs = {
  communityId: Scalars['Int'];
};


export type MutationCommunityMembershipSubscribeArgs = {
  communityId: Scalars['Int'];
};


export type MutationCommunityUpdateArgs = {
  communityId: Scalars['Int'];
  data: CommunityUpdateInput;
};


export type MutationFileCreateSignedUploadUrlArgs = {
  data: FileCreateSignedUploadUrlInput;
};


export type MutationNotificationPushSendArgs = {
  userId: Scalars['Int'];
  data: NotificationPushSendInput;
};


export type MutationReportCommunityArgs = {
  communityId?: Maybe<Scalars['Int']>;
};


export type MutationReportUserArgs = {
  userId?: Maybe<Scalars['Int']>;
};


export type MutationReportVideoArgs = {
  videoMediaId?: Maybe<Scalars['Int']>;
};


export type MutationUnreportCommunityArgs = {
  communityId?: Maybe<Scalars['Int']>;
};


export type MutationUnreportUserArgs = {
  userId?: Maybe<Scalars['Int']>;
};


export type MutationUnreportVideoArgs = {
  videoMediaId?: Maybe<Scalars['Int']>;
};


export type MutationUserFollowArgs = {
  userId: Scalars['Int'];
};


export type MutationUserRefreshTokenArgs = {
  data: UserRefreshTokenInput;
};


export type MutationUserSignFullArgs = {
  data: UserSignFullInput;
};


export type MutationUserSignInConfirmArgs = {
  data: UserSignInConfirmInput;
};


export type MutationUserSignUpConfirmArgs = {
  data: UserSignUpConfirmInput;
};


export type MutationUserSponsorCodeCreateArgs = {
  data?: Maybe<UserSponsorCodeCreateInput>;
};


export type MutationUserSponsorCodeValidArgs = {
  data: UserSponsorCodeValidInput;
};


export type MutationUserUnfollowArgs = {
  userId: Scalars['Int'];
};


export type MutationUserUpdateArgs = {
  data: UserUpdateInput;
};


export type MutationVideoCommunityTrailerCreateArgs = {
  communityId: Scalars['Int'];
  data: VideoCommunityTrailerCreateInput;
};


export type MutationVideoCommunityTrailerDeleteArgs = {
  communityId: Scalars['Int'];
};


export type MutationVideoEpisodeCreateArgs = {
  communityId: Scalars['Int'];
  data: VideoEpisodeCreateInput;
};


export type MutationVideoEpisodeDeleteArgs = {
  episodeId: Scalars['Int'];
};


export type MutationVideoEpisodeUpdateArgs = {
  episodeId: Scalars['Int'];
  data: VideoEpisodeUpdateInput;
};


export type MutationLiveRoomCreateArgs = {
  data: LiveRoomCreateInput;
};


export type MutationLiveRoomInviteArgs = {
  userId: Scalars['Int'];
  liveRoomName: Scalars['String'];
};


export type MutationLiveRoomRecordPermissionAskArgs = {
  liveRoomName: Scalars['String'];
};


export type MutationLiveRoomRecordPermissionResponseArgs = {
  liveRoomName: Scalars['String'];
  data: LiveRoomRecordPermissionResponseInput;
};


export type MutationLiveRoomStopArgs = {
  liveRoomName: Scalars['String'];
};


export type MutationVideoUserTrailerCreateArgs = {
  data: VideoUserTrailerCreateInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type NestedEnumChatMessageTypeFilter = {
  equals?: Maybe<ChatMessageType>;
  in?: Maybe<Array<ChatMessageType>>;
  notIn?: Maybe<Array<ChatMessageType>>;
  not?: Maybe<NestedEnumChatMessageTypeFilter>;
};

export type NestedEnumCloudTypeFilter = {
  equals?: Maybe<CloudType>;
  in?: Maybe<Array<CloudType>>;
  notIn?: Maybe<Array<CloudType>>;
  not?: Maybe<NestedEnumCloudTypeFilter>;
};

export type NestedEnumCommunityMembershipRoleFilter = {
  equals?: Maybe<CommunityMembershipRole>;
  in?: Maybe<Array<CommunityMembershipRole>>;
  notIn?: Maybe<Array<CommunityMembershipRole>>;
  not?: Maybe<NestedEnumCommunityMembershipRoleFilter>;
};

export type NestedEnumCommunityPrivacyModeFilter = {
  equals?: Maybe<CommunityPrivacyMode>;
  in?: Maybe<Array<CommunityPrivacyMode>>;
  notIn?: Maybe<Array<CommunityPrivacyMode>>;
  not?: Maybe<NestedEnumCommunityPrivacyModeFilter>;
};

export type NestedEnumDeviceTypeNullableFilter = {
  equals?: Maybe<DeviceType>;
  in?: Maybe<Array<DeviceType>>;
  notIn?: Maybe<Array<DeviceType>>;
  not?: Maybe<NestedEnumDeviceTypeNullableFilter>;
};

export type NestedEnumFileStatusFilter = {
  equals?: Maybe<FileStatus>;
  in?: Maybe<Array<FileStatus>>;
  notIn?: Maybe<Array<FileStatus>>;
  not?: Maybe<NestedEnumFileStatusFilter>;
};

export type NestedEnumLiveRoomStatusFilter = {
  equals?: Maybe<LiveRoomStatus>;
  in?: Maybe<Array<LiveRoomStatus>>;
  notIn?: Maybe<Array<LiveRoomStatus>>;
  not?: Maybe<NestedEnumLiveRoomStatusFilter>;
};

export type NestedEnumLocaleFilter = {
  equals?: Maybe<Locale>;
  in?: Maybe<Array<Locale>>;
  notIn?: Maybe<Array<Locale>>;
  not?: Maybe<NestedEnumLocaleFilter>;
};

export type NestedEnumReportTypeFilter = {
  equals?: Maybe<ReportType>;
  in?: Maybe<Array<ReportType>>;
  notIn?: Maybe<Array<ReportType>>;
  not?: Maybe<NestedEnumReportTypeFilter>;
};

export type NestedEnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
};

export type NestedEnumVerificationStatusFilter = {
  equals?: Maybe<VerificationStatus>;
  in?: Maybe<Array<VerificationStatus>>;
  notIn?: Maybe<Array<VerificationStatus>>;
  not?: Maybe<NestedEnumVerificationStatusFilter>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NotAuthorizedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type NotificationPushSendInput = {
  title?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type NotificationPushSendPayload = NotificationResult | GenericError | NotAuthorizedError | InputError | UserNotAvailableError | UserNotLoggedError;

export type NotificationResult = {
  isDelivered: Scalars['Boolean'];
};





export type PictureMedia = {
  id: Scalars['Int'];
  fileId: Scalars['String'];
  status: FileStatus;
  type: CloudType;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type PictureMediaListRelationFilter = {
  every?: Maybe<PictureMediaWhereInput>;
  some?: Maybe<PictureMediaWhereInput>;
  none?: Maybe<PictureMediaWhereInput>;
};

export type PictureMediaResult = MediaInterface & {
  url: Scalars['String'];
  picture?: Maybe<PictureMedia>;
};

export type PictureMediaWhereInput = {
  AND?: Maybe<Array<PictureMediaWhereInput>>;
  OR?: Maybe<Array<PictureMediaWhereInput>>;
  NOT?: Maybe<Array<PictureMediaWhereInput>>;
  id?: Maybe<IntFilter>;
  status?: Maybe<EnumFileStatusFilter>;
  fileId?: Maybe<StringFilter>;
  type?: Maybe<EnumCloudTypeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
  userAvatar?: Maybe<UserWhereInput>;
  userAvatarId?: Maybe<IntNullableFilter>;
  coverCommunity?: Maybe<CommunityWhereInput>;
  coverCommunityId?: Maybe<IntNullableFilter>;
  coverChatRoom?: Maybe<ChatRoomWhereInput>;
  coverChatRoomId?: Maybe<IntNullableFilter>;
  thumbnailVideoEpisode?: Maybe<VideoEpisodeWhereInput>;
  thumbnailVideoEpisodeId?: Maybe<IntNullableFilter>;
  chatMessage?: Maybe<ChatMessageWhereInput>;
  chatMessageId?: Maybe<IntNullableFilter>;
  community?: Maybe<CommunityWhereInput>;
  communityId?: Maybe<IntNullableFilter>;
  chatRoom?: Maybe<ChatRoomWhereInput>;
  chatRoomId?: Maybe<IntNullableFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntNullableFilter>;
};

export enum PrivacyMode {
  Public = 'PUBLIC',
  SemiPublic = 'SEMI_PUBLIC',
  Private = 'PRIVATE'
}

export type Query = {
  /** **Authentication**: `USER` */
  blocks?: Maybe<BlocksPayload>;
  /** **Authentication**: `USER` */
  chatRooms?: Maybe<ChatRoomsPayload>;
  /** **Authentication**: `USER` */
  chatMessages?: Maybe<ChatMessagesPayload>;
  /** **Authentication**: `USER` */
  communities?: Maybe<CommunitiesPayload>;
  /** **Authentication**: `USER` */
  communityMembershipsByCommunity?: Maybe<CommunityMembershipsPayload>;
  /** **Authentication**: `USER` */
  communitiesOwned?: Maybe<CommunitiesOwnedPayload>;
  /** **Authentication**: `USER` */
  community?: Maybe<CommunityPayload>;
  /** **Authentication**: `USER` */
  communityMembershipsByUser?: Maybe<CommunityMembershipsPayload>;
  /** **Authentication**: *N/A* */
  interestCategories?: Maybe<InterestCategoriesPayload>;
  /** **Authentication**: *N/A* */
  lookingFors?: Maybe<LookingForsPayload>;
  /** **Authentication**: `USER` */
  reports?: Maybe<ReportsPayload>;
  /** **Authentication**: `USER` */
  userSearch?: Maybe<UserSearchPayload>;
  /** **Authentication**: `USER` */
  userFollows?: Maybe<UserFollowsPayload>;
  /** **Authentication**: `USER` */
  userByAccessToken?: Maybe<UserByAccessTokenPayload>;
  /** **Authentication**: `USER` */
  userById?: Maybe<UserByIdPayload>;
  /** **Authentication**: `USER` */
  userFollowers?: Maybe<UserFollowersPayload>;
  /** **Authentication**: `USER` */
  communityTrailersDiscover?: Maybe<CommunityTrailersDiscoverPayload>;
  /** **Authentication**: `USER` */
  episodesByCommunity?: Maybe<EpisodesByCommunityPayload>;
  /** **Authentication**: `USER` */
  userTrailersDiscover?: Maybe<UserTrailersDiscoverPayload>;
};


export type QueryBlocksArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BlockOrderByInput>;
  cursor?: Maybe<BlockWhereUniqueInput>;
};


export type QueryChatRoomsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ChatRoomOrderByInput>;
  cursor?: Maybe<ChatRoomWhereUniqueInput>;
};


export type QueryChatMessagesArgs = {
  chatRoomId: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ChatMessageOrderByInput>;
  cursor?: Maybe<ChatMessageWhereUniqueInput>;
};


export type QueryCommunitiesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CommunityOrderByInput>;
  cursor?: Maybe<CommunityWhereUniqueInput>;
};


export type QueryCommunityMembershipsByCommunityArgs = {
  communityId: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CommunityMembershipOrderByInput>;
  cursor?: Maybe<CommunityMembershipWhereUniqueInput>;
};


export type QueryCommunitiesOwnedArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CommunityOrderByInput>;
  cursor?: Maybe<CommunityWhereUniqueInput>;
};


export type QueryCommunityArgs = {
  communityId: Scalars['Int'];
};


export type QueryCommunityMembershipsByUserArgs = {
  userId: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CommunityMembershipOrderByInput>;
  cursor?: Maybe<CommunityMembershipWhereUniqueInput>;
};


export type QueryReportsArgs = {
  type?: Maybe<ReportType>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReportOrderByInput>;
  cursor?: Maybe<ReportWhereUniqueInput>;
};


export type QueryUserSearchArgs = {
  search?: Maybe<Scalars['String']>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserOrderByInput>;
  cursor?: Maybe<UserWhereUniqueInput>;
};


export type QueryUserFollowsArgs = {
  userId?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserFollowOrderByInput>;
  cursor?: Maybe<UserFollowWhereUniqueInput>;
};


export type QueryUserByAccessTokenArgs = {
  accessToken: Scalars['String'];
};


export type QueryUserByIdArgs = {
  userId: Scalars['Int'];
};


export type QueryUserFollowersArgs = {
  userId?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserFollowOrderByInput>;
  cursor?: Maybe<UserFollowWhereUniqueInput>;
};


export type QueryCommunityTrailersDiscoverArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VideoCommunityTrailerOrderByInput>;
  cursor?: Maybe<VideoCommunityTrailerWhereUniqueInput>;
};


export type QueryEpisodesByCommunityArgs = {
  communityId: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VideoEpisodeOrderByInput>;
  cursor?: Maybe<VideoEpisodeWhereUniqueInput>;
};


export type QueryUserTrailersDiscoverArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VideoUserTrailerOrderByInput>;
  cursor?: Maybe<VideoUserTrailerWhereUniqueInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RefreshTokenExpiredError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type Report = {
  id: Scalars['Int'];
  isReported: Scalars['Boolean'];
  type: ReportType;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  reportedVideo?: Maybe<VideoMedia>;
  reportedCommunity?: Maybe<Community>;
  reportedUser?: Maybe<User>;
  reporterUser: User;
};

export type ReportCommunityPayload = ReportResult | GenericError | NotAuthorizedError | InputError | CommunityNotFoundError | ReportIdIsMissingError | ResourceAlreadyReportedError;

export type ReportIdIsMissingError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type ReportListRelationFilter = {
  every?: Maybe<ReportWhereInput>;
  some?: Maybe<ReportWhereInput>;
  none?: Maybe<ReportWhereInput>;
};

export type ReportNotFoundError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type ReportOrderByInput = {
  id?: Maybe<SortOrder>;
  isReported?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  reportedVideoId?: Maybe<SortOrder>;
  reportedCommunityId?: Maybe<SortOrder>;
  reportedUserId?: Maybe<SortOrder>;
  reporterUserId?: Maybe<SortOrder>;
};

export type ReportResult = {
  isReported: Scalars['Boolean'];
};

export type ReportResults = {
  reports: Array<Report>;
};

export enum ReportType {
  Video = 'VIDEO',
  User = 'USER',
  Community = 'COMMUNITY'
}

export type ReportUserPayload = ReportResult | GenericError | NotAuthorizedError | InputError | UserNotFoundError | ReportIdIsMissingError | ResourceAlreadyReportedError;

export type ReportVideoPayload = ReportResult | GenericError | NotAuthorizedError | InputError | FileNotFoundError | ReportIdIsMissingError | ResourceAlreadyReportedError;

export type ReportWhereInput = {
  AND?: Maybe<Array<ReportWhereInput>>;
  OR?: Maybe<Array<ReportWhereInput>>;
  NOT?: Maybe<Array<ReportWhereInput>>;
  id?: Maybe<IntFilter>;
  isReported?: Maybe<BoolFilter>;
  type?: Maybe<EnumReportTypeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
  reportedVideo?: Maybe<VideoMediaWhereInput>;
  reportedVideoId?: Maybe<IntNullableFilter>;
  reportedCommunity?: Maybe<CommunityWhereInput>;
  reportedCommunityId?: Maybe<IntNullableFilter>;
  reportedUser?: Maybe<UserWhereInput>;
  reportedUserId?: Maybe<IntNullableFilter>;
  reporterUser?: Maybe<UserWhereInput>;
  reporterUserId?: Maybe<IntFilter>;
};

export type ReportWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ReportsPayload = ReportResults | GenericError | NotAuthorizedError | InputError;

export type ResourceAlreadyReportedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type ResourceAlreadyUnreportedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type ResourceNotFoundError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  User = 'USER'
}




export type SignFullResult = {
  isDelivered: Scalars['Boolean'];
  isUserExists: Scalars['Boolean'];
};

export type SignOutResult = {
  isSignout: Scalars['Boolean'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SponsorCode = {
  id: Scalars['Int'];
  code: Scalars['String'];
  isUsed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  expiredAt: Scalars['DateTime'];
};

export type SponsorCodeAlreadyExistsError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type SponsorCodeAlreadyUsedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type SponsorCodeExpiredError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type SponsorCodeListRelationFilter = {
  every?: Maybe<SponsorCodeWhereInput>;
  some?: Maybe<SponsorCodeWhereInput>;
  none?: Maybe<SponsorCodeWhereInput>;
};

export type SponsorCodeMismatchError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type SponsorCodeResult = {
  sponsorCode: SponsorCode;
};

export type SponsorCodeValidResult = {
  isValid: Scalars['Boolean'];
  user: User;
};

export type SponsorCodeWhereInput = {
  AND?: Maybe<Array<SponsorCodeWhereInput>>;
  OR?: Maybe<Array<SponsorCodeWhereInput>>;
  NOT?: Maybe<Array<SponsorCodeWhereInput>>;
  id?: Maybe<IntFilter>;
  code?: Maybe<StringFilter>;
  isUsed?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  expiredAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntNullableFilter>;
};


export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type Subscription = {
  chatSub?: Maybe<ChatSubPayload>;
  userSub?: Maybe<UserSubPayload>;
  liveSub?: Maybe<LiveSubPayload>;
};


export type SubscriptionChatSubArgs = {
  accessToken: Scalars['String'];
  chatRoomId: Scalars['Int'];
};


export type SubscriptionUserSubArgs = {
  accessToken: Scalars['String'];
};


export type SubscriptionLiveSubArgs = {
  accessToken: Scalars['String'];
  liveRoomId: Scalars['Int'];
};

export type SubscriptionInterface = {
  action: Scalars['String'];
  subscriptionSource: Scalars['String'];
};

export type UnblockUserPayload = BlockResult | GenericError | NotAuthorizedError | InputError | BlockNotFoundError | UserNotFoundError | UserAlreadyUnblockedError;

export type UnreportCommunityPayload = ReportResult | GenericError | NotAuthorizedError | InputError | CommunityNotFoundError | ReportIdIsMissingError | ReportNotFoundError | ResourceAlreadyUnreportedError;

export type UnreportUserPayload = ReportResult | GenericError | NotAuthorizedError | InputError | UserNotFoundError | ReportIdIsMissingError | ReportNotFoundError | ResourceAlreadyUnreportedError;

export type UnreportVideoPayload = ReportResult | GenericError | NotAuthorizedError | InputError | FileNotFoundError | ReportIdIsMissingError | ReportNotFoundError | ResourceAlreadyUnreportedError;

export type UnvalidFileTypeError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};


export type User = {
  id: Scalars['Int'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** **Authentication**: `ME` */
  phoneIndex?: Maybe<Scalars['String']>;
  /** **Authentication**: `ME` */
  phoneNumber?: Maybe<Scalars['String']>;
  status: VerificationStatus;
  locale: Locale;
  deviceType?: Maybe<DeviceType>;
  isActive: Scalars['Boolean'];
  isOnline: Scalars['Boolean'];
  isLogged: Scalars['Boolean'];
  unreadFollowersCounter: Scalars['Int'];
  isTermsAccepted: Scalars['Boolean'];
  urlLinkedin?: Maybe<Scalars['String']>;
  isBanned: Scalars['Boolean'];
  role: Role;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  bannedAt?: Maybe<Scalars['DateTime']>;
  avatar?: Maybe<PictureMedia>;
  /** **Authentication**: `ME` */
  pushToken?: Maybe<Scalars['String']>;
  /** **Authentication**: `ME` */
  voipToken?: Maybe<Scalars['String']>;
  countFollowers: Scalars['Int'];
  countFollows: Scalars['Int'];
  interests: Array<Interest>;
  lookingFors: Array<LookingFor>;
  videoUserTrailer?: Maybe<VideoUserTrailer>;
};

export type UserAlreadyBlockedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type UserAlreadyConfirmedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type UserAlreadyDeletedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type UserAlreadyExistsError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type UserAlreadyFollowedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type UserAlreadyUnblockedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type UserAlreadyUnfollowedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type UserBannedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type UserByAccessTokenPayload = UserResult | GenericError | NotAuthorizedError | InputError | UserNotFoundError;

export type UserByIdPayload = UserResult | GenericError | NotAuthorizedError | InputError | UserNotFoundError;

export type UserDeletePayload = DeletedResult | GenericError | NotAuthorizedError | InputError | UserAlreadyDeletedError;

export type UserDeletedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type UserFollow = {
  id: Scalars['Int'];
  fromUser: User;
  toUser: User;
  isActive: Scalars['Boolean'];
  isMutual: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type UserFollowListRelationFilter = {
  every?: Maybe<UserFollowWhereInput>;
  some?: Maybe<UserFollowWhereInput>;
  none?: Maybe<UserFollowWhereInput>;
};

export type UserFollowNotFoundError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type UserFollowOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  isActive?: Maybe<SortOrder>;
  isMutual?: Maybe<SortOrder>;
  fromUserId?: Maybe<SortOrder>;
  toUserId?: Maybe<SortOrder>;
};

export type UserFollowPayload = UserFollowResult | GenericError | NotAuthorizedError | InputError | UserNotFoundError | UserAlreadyFollowedError;

export type UserFollowResult = {
  isFollowed: Scalars['Boolean'];
  isMutual: Scalars['Boolean'];
};

export type UserFollowResults = {
  userFollows: Array<UserFollow>;
};

export type UserFollowWhereInput = {
  AND?: Maybe<Array<UserFollowWhereInput>>;
  OR?: Maybe<Array<UserFollowWhereInput>>;
  NOT?: Maybe<Array<UserFollowWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
  isActive?: Maybe<BoolFilter>;
  isMutual?: Maybe<BoolFilter>;
  fromUser?: Maybe<UserWhereInput>;
  fromUserId?: Maybe<IntFilter>;
  toUser?: Maybe<UserWhereInput>;
  toUserId?: Maybe<IntFilter>;
};

export type UserFollowWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type UserFollowerResults = {
  userFollowers: Array<UserFollow>;
};

export type UserFollowersPayload = UserFollowerResults | GenericError | NotAuthorizedError | InputError;

export type UserFollowsPayload = UserFollowResults | GenericError | NotAuthorizedError | InputError;

export type UserLimitExceededError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
};

export type UserNeedResetPasswordError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type UserNotAvailableError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type UserNotFollowAuthorizationError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type UserNotFoundError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type UserNotLoggedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  pushToken?: Maybe<SortOrder>;
  voipToken?: Maybe<SortOrder>;
  deviceType?: Maybe<SortOrder>;
  socketConnectionId?: Maybe<SortOrder>;
  locale?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  isTermsAccepted?: Maybe<SortOrder>;
  isOnline?: Maybe<SortOrder>;
  isLogged?: Maybe<SortOrder>;
  isActive?: Maybe<SortOrder>;
  phoneNumber?: Maybe<SortOrder>;
  phoneIndex?: Maybe<SortOrder>;
  urlLinkedin?: Maybe<SortOrder>;
  isBanned?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  bannedAt?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  unreadFollowersCounter?: Maybe<SortOrder>;
};

export type UserRefreshTokenInput = {
  refreshToken: Scalars['String'];
};

export type UserResetUnreadFollowsPayload = UserResetUnreadFollowsResult | GenericError | NotAuthorizedError | InputError | ChatRoomNotFoundError;

export type UserResetUnreadFollowsResult = {
  isReset: Scalars['Boolean'];
};

export type UserResult = {
  user: User;
};

export type UserResults = {
  users: Array<User>;
};

export type UserSearchPayload = UserResults | GenericError | NotAuthorizedError | InputError;

export type UserSignFullInput = {
  phoneNumber: Scalars['PhoneNumber'];
  phoneIndex: Scalars['PhoneIndex'];
};

export type UserSignFullPayload = SignFullResult | GenericError | NotAuthorizedError | InputError | UserBannedError | UserLimitExceededError;

export type UserSignInConfirmInput = {
  code: Scalars['PhoneCode'];
  phoneNumber: Scalars['PhoneNumber'];
  phoneIndex: Scalars['PhoneIndex'];
};

export type UserSignInConfirmPayload = AccessTokenResult | GenericError | NotAuthorizedError | InputError | UserNotFoundError | UserBannedError | UserDeletedError | ResourceNotFoundError | UserAlreadyConfirmedError | VerificationCodeExpiredError | VerificationCodeMismatchError | VerificationCodeAlreadyUsedError | DeviceTypeHeaderIsMissingError;

export type UserSignOutPayload = SignOutResult | GenericError | NotAuthorizedError | InputError | UserNotFoundError;

export type UserSignUpConfirmInput = {
  phoneNumber: Scalars['PhoneNumber'];
  phoneIndex: Scalars['PhoneIndex'];
  code: Scalars['PhoneCode'];
  firstName?: Maybe<Scalars['ShortName']>;
  lastName?: Maybe<Scalars['ShortName']>;
  title?: Maybe<Scalars['String']>;
  interestIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lookingForIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  isTermsAccepted?: Maybe<Scalars['Boolean']>;
  urlLinkedin?: Maybe<Scalars['Url']>;
  pushToken?: Maybe<Scalars['String']>;
  voipToken?: Maybe<Scalars['String']>;
  locale?: Maybe<LocaleType>;
};

export type UserSignUpConfirmPayload = AccessTokenResult | GenericError | NotAuthorizedError | InputError | UserAlreadyConfirmedError | InterestNotFoundError | LookingForNotFoundError | UserBannedError | UserDeletedError | UserAlreadyExistsError | VerificationCodeExpiredError | VerificationCodeMismatchError | ResourceNotFoundError | UserUnconfirmedError | FileNotFoundError | FileAlreadyAttachedError | DeviceTypeHeaderIsMissingError;

export type UserSponsorCodeCreateInput = {
  code?: Maybe<Scalars['StringCode']>;
};

export type UserSponsorCodeCreatePayload = SponsorCodeResult | GenericError | NotAuthorizedError | InputError | SponsorCodeAlreadyExistsError;

export type UserSponsorCodeValidInput = {
  code: Scalars['StringCode'];
};

export type UserSponsorCodeValidPayload = SponsorCodeValidResult | GenericError | NotAuthorizedError | InputError | SponsorCodeAlreadyUsedError | SponsorCodeMismatchError | SponsorCodeExpiredError;

export type UserSubPayload = UserUploadSubEvent | GenericError | NotAuthorizedError | InputError | FileConversionError | UnvalidFileTypeError;

export type UserTrailersDiscoverPayload = VideoUserTrailerResults | GenericError | NotAuthorizedError | InputError;

export type UserUnconfirmedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type UserUnfollowPayload = UserFollowResult | GenericError | NotAuthorizedError | InputError | UserNotFoundError | UserAlreadyUnfollowedError | UserFollowNotFoundError;

export type UserUpdateInput = {
  pushToken?: Maybe<Scalars['String']>;
  voipToken?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['ShortName']>;
  lastName?: Maybe<Scalars['ShortName']>;
  interestIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lookingForIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  avatarFileId?: Maybe<Scalars['FileId']>;
  isTermsAccepted?: Maybe<Scalars['Boolean']>;
  urlLinkedin?: Maybe<Scalars['Url']>;
  locale?: Maybe<LocaleType>;
};

export type UserUpdatePayload = UserResult | GenericError | NotAuthorizedError | InputError | InterestNotFoundError | LookingForNotFoundError | FileNotFoundError | FileBadStatusError;

export type UserUploadSubEvent = SubscriptionInterface & {
  action: Scalars['String'];
  subscriptionSource: Scalars['String'];
  isUploadSucceeded: Scalars['Boolean'];
  type: FileType;
  fileId: Scalars['String'];
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  firstName?: Maybe<StringNullableFilter>;
  lastName?: Maybe<StringNullableFilter>;
  title?: Maybe<StringNullableFilter>;
  pushToken?: Maybe<StringNullableFilter>;
  voipToken?: Maybe<StringNullableFilter>;
  deviceType?: Maybe<EnumDeviceTypeNullableFilter>;
  socketConnectionId?: Maybe<StringNullableFilter>;
  locale?: Maybe<EnumLocaleFilter>;
  status?: Maybe<EnumVerificationStatusFilter>;
  isTermsAccepted?: Maybe<BoolFilter>;
  isOnline?: Maybe<BoolFilter>;
  isLogged?: Maybe<BoolFilter>;
  isActive?: Maybe<BoolFilter>;
  phoneNumber?: Maybe<StringNullableFilter>;
  phoneIndex?: Maybe<StringNullableFilter>;
  urlLinkedin?: Maybe<StringNullableFilter>;
  isBanned?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
  bannedAt?: Maybe<DateTimeNullableFilter>;
  role?: Maybe<EnumRoleFilter>;
  unreadFollowersCounter?: Maybe<IntFilter>;
  videoEpisodes?: Maybe<VideoEpisodeListRelationFilter>;
  videoUserTrailers?: Maybe<VideoUserTrailerListRelationFilter>;
  videoCommunityTrailers?: Maybe<VideoCommunityTrailerListRelationFilter>;
  avatars?: Maybe<PictureMediaListRelationFilter>;
  interests?: Maybe<InterestListRelationFilter>;
  lookingFors?: Maybe<LookingForListRelationFilter>;
  videoViews?: Maybe<VideoViewListRelationFilter>;
  reported?: Maybe<ReportListRelationFilter>;
  reports?: Maybe<ReportListRelationFilter>;
  blocked?: Maybe<BlockListRelationFilter>;
  blocks?: Maybe<BlockListRelationFilter>;
  communityMemberships?: Maybe<CommunityMembershipListRelationFilter>;
  followers?: Maybe<UserFollowListRelationFilter>;
  follows?: Maybe<UserFollowListRelationFilter>;
  sponsorCodes?: Maybe<SponsorCodeListRelationFilter>;
  chatRooms?: Maybe<ChatRoomListRelationFilter>;
  chatMessages?: Maybe<ChatMessageListRelationFilter>;
  chatRoomUserProfiles?: Maybe<ChatRoomUserProfileListRelationFilter>;
  liveRoomParticipants?: Maybe<LiveRoomListRelationFilter>;
  videos?: Maybe<VideoMediaListRelationFilter>;
  audios?: Maybe<AudioMediaListRelationFilter>;
  pictures?: Maybe<PictureMediaListRelationFilter>;
  participantsVideoEpisode?: Maybe<VideoEpisodeListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};


export type VerificationCode = {
  id: Scalars['Int'];
  code: Scalars['String'];
  type: VerificationType;
  isUsed: Scalars['Boolean'];
  phoneIndex: Scalars['String'];
  phoneNumber: Scalars['String'];
  createdAt: Scalars['DateTime'];
  expiredAt: Scalars['DateTime'];
};

export type VerificationCodeAlreadyUsedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type VerificationCodeExpiredError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type VerificationCodeMismatchError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export enum VerificationStatus {
  Unconfirmed = 'UNCONFIRMED',
  Confirmed = 'CONFIRMED'
}

export enum VerificationType {
  SignUp = 'SIGN_UP',
  SignIn = 'SIGN_IN'
}

export type VideoCommunityTrailer = {
  id: Scalars['Int'];
  viewsCount: Scalars['Int'];
  user: User;
  video: VideoMedia;
  community: Community;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type VideoCommunityTrailerCreateInput = {
  fileId: Scalars['FileId'];
};

export type VideoCommunityTrailerCreatePayload = VideoCommunityTrailerResult | GenericError | NotAuthorizedError | InputError | FileNotFoundError | FileBadStatusError | CommunityNotFoundError | CommunityRoleNotAuthorizedError | VideoTrailerAlreadyExistsError;

export type VideoCommunityTrailerDeletePayload = DeletedResult | GenericError | NotAuthorizedError | InputError | CommunityNotFoundError | CommunityRoleNotAuthorizedError | VideoTrailerNotFoundError | VideoTrailerAlreadyDeletedError;

export type VideoCommunityTrailerListRelationFilter = {
  every?: Maybe<VideoCommunityTrailerWhereInput>;
  some?: Maybe<VideoCommunityTrailerWhereInput>;
  none?: Maybe<VideoCommunityTrailerWhereInput>;
};

export type VideoCommunityTrailerOrderByInput = {
  id?: Maybe<SortOrder>;
  viewsCount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  communityId?: Maybe<SortOrder>;
};

export type VideoCommunityTrailerResult = {
  videoCommunityTrailer: VideoCommunityTrailer;
};

export type VideoCommunityTrailerResults = {
  videoCommunityTrailers: Array<VideoCommunityTrailer>;
};

export type VideoCommunityTrailerWhereInput = {
  AND?: Maybe<Array<VideoCommunityTrailerWhereInput>>;
  OR?: Maybe<Array<VideoCommunityTrailerWhereInput>>;
  NOT?: Maybe<Array<VideoCommunityTrailerWhereInput>>;
  id?: Maybe<IntFilter>;
  viewsCount?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
  video?: Maybe<VideoMediaWhereInput>;
  community?: Maybe<CommunityWhereInput>;
  communityId?: Maybe<IntFilter>;
};

export type VideoCommunityTrailerWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type VideoEpisode = {
  id: Scalars['Int'];
  viewsCount: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  thumbnail?: Maybe<PictureMedia>;
  user: User;
  video: VideoMedia;
  participants: Array<User>;
  countParticipants: Scalars['Int'];
  community: Community;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type VideoEpisodeAlreadyDeletedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type VideoEpisodeAlreadyExistsError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type VideoEpisodeCreateInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  fileId: Scalars['FileId'];
  thumbnailFileId?: Maybe<Scalars['FileId']>;
  participantUserIds: Array<Maybe<Scalars['Int']>>;
};

export type VideoEpisodeCreatePayload = VideoEpisodeResult | GenericError | NotAuthorizedError | InputError | UserNotFoundError | FileNotFoundError | FileBadStatusError | CommunityNotFoundError | CommunityRoleNotAuthorizedError | VideoEpisodeAlreadyExistsError | VideoEpisodeMaximumParticipantsReachedError;

export type VideoEpisodeDeletePayload = DeletedResult | GenericError | NotAuthorizedError | InputError | CommunityNotFoundError | CommunityRoleNotAuthorizedError | VideoEpisodeNotFoundError | VideoEpisodeAlreadyDeletedError;

export type VideoEpisodeListRelationFilter = {
  every?: Maybe<VideoEpisodeWhereInput>;
  some?: Maybe<VideoEpisodeWhereInput>;
  none?: Maybe<VideoEpisodeWhereInput>;
};

export type VideoEpisodeMaximumParticipantsReachedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type VideoEpisodeNotFoundError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type VideoEpisodeOrderByInput = {
  id?: Maybe<SortOrder>;
  viewsCount?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  countParticipants?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  communityId?: Maybe<SortOrder>;
};

export type VideoEpisodeParticipantAlreadyAddedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type VideoEpisodeParticipantAlreadyRemovedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type VideoEpisodeResult = {
  videoEpisode: VideoEpisode;
};

export type VideoEpisodeResults = {
  videoEpisodes: Array<VideoEpisode>;
};

export type VideoEpisodeUpdateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  thumbnailFileId?: Maybe<Scalars['FileId']>;
  participantUserIdsToAdd?: Maybe<Array<Maybe<Scalars['Int']>>>;
  participantUserIdsToRemove?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type VideoEpisodeUpdatePayload = VideoEpisodeResult | GenericError | NotAuthorizedError | InputError | UserNotFoundError | FileNotFoundError | FileBadStatusError | FileAlreadyAttachedError | CommunityRoleNotAuthorizedError | VideoEpisodeMaximumParticipantsReachedError | VideoEpisodeParticipantAlreadyAddedError | VideoEpisodeParticipantAlreadyRemovedError;

export type VideoEpisodeWhereInput = {
  AND?: Maybe<Array<VideoEpisodeWhereInput>>;
  OR?: Maybe<Array<VideoEpisodeWhereInput>>;
  NOT?: Maybe<Array<VideoEpisodeWhereInput>>;
  id?: Maybe<IntFilter>;
  viewsCount?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  thumbnails?: Maybe<PictureMediaListRelationFilter>;
  participants?: Maybe<UserListRelationFilter>;
  countParticipants?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
  video?: Maybe<VideoMediaWhereInput>;
  community?: Maybe<CommunityWhereInput>;
  communityId?: Maybe<IntFilter>;
};

export type VideoEpisodeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type VideoMedia = {
  id: Scalars['Int'];
  status: FileStatus;
  fileId: Scalars['String'];
  duration?: Maybe<Scalars['Float']>;
  type: CloudType;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type VideoMediaListRelationFilter = {
  every?: Maybe<VideoMediaWhereInput>;
  some?: Maybe<VideoMediaWhereInput>;
  none?: Maybe<VideoMediaWhereInput>;
};

export type VideoMediaResult = MediaInterface & {
  url: Scalars['String'];
  video?: Maybe<VideoMedia>;
};

export type VideoMediaWhereInput = {
  AND?: Maybe<Array<VideoMediaWhereInput>>;
  OR?: Maybe<Array<VideoMediaWhereInput>>;
  NOT?: Maybe<Array<VideoMediaWhereInput>>;
  id?: Maybe<IntFilter>;
  status?: Maybe<EnumFileStatusFilter>;
  fileId?: Maybe<StringFilter>;
  type?: Maybe<EnumCloudTypeFilter>;
  duration?: Maybe<FloatNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
  videoUserTrailer?: Maybe<VideoUserTrailerWhereInput>;
  videoUserTrailerId?: Maybe<IntNullableFilter>;
  videoCommunityTrailer?: Maybe<VideoCommunityTrailerWhereInput>;
  videoCommunityTrailerId?: Maybe<IntNullableFilter>;
  videoEpisode?: Maybe<VideoEpisodeWhereInput>;
  videoEpisodeId?: Maybe<IntNullableFilter>;
  chatMessage?: Maybe<ChatMessageWhereInput>;
  chatMessageId?: Maybe<IntNullableFilter>;
  videoViews?: Maybe<VideoViewListRelationFilter>;
  reports?: Maybe<ReportListRelationFilter>;
  community?: Maybe<CommunityWhereInput>;
  communityId?: Maybe<IntNullableFilter>;
  chatRoom?: Maybe<ChatRoomWhereInput>;
  chatRoomId?: Maybe<IntNullableFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntNullableFilter>;
};

export type VideoTrailerAlreadyDeletedError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type VideoTrailerAlreadyExistsError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type VideoTrailerNotFoundError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type VideoUserTrailer = {
  id: Scalars['Int'];
  viewsCount: Scalars['Int'];
  user: User;
  video: VideoMedia;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type VideoUserTrailerCreateInput = {
  fileId: Scalars['FileId'];
};

export type VideoUserTrailerCreatePayload = VideoUserTrailerResult | GenericError | NotAuthorizedError | InputError | FileNotFoundError | FileBadStatusError | VideoTrailerAlreadyExistsError;

export type VideoUserTrailerDeletePayload = DeletedResult | GenericError | NotAuthorizedError | InputError | VideoTrailerNotFoundError | VideoTrailerAlreadyDeletedError;

export type VideoUserTrailerListRelationFilter = {
  every?: Maybe<VideoUserTrailerWhereInput>;
  some?: Maybe<VideoUserTrailerWhereInput>;
  none?: Maybe<VideoUserTrailerWhereInput>;
};

export type VideoUserTrailerOrderByInput = {
  id?: Maybe<SortOrder>;
  viewsCount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type VideoUserTrailerResult = {
  videoUserTrailer: VideoUserTrailer;
};

export type VideoUserTrailerResults = {
  videoUserTrailers: Array<VideoUserTrailer>;
};

export type VideoUserTrailerWhereInput = {
  AND?: Maybe<Array<VideoUserTrailerWhereInput>>;
  OR?: Maybe<Array<VideoUserTrailerWhereInput>>;
  NOT?: Maybe<Array<VideoUserTrailerWhereInput>>;
  id?: Maybe<IntFilter>;
  viewsCount?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
  video?: Maybe<VideoMediaWhereInput>;
};

export type VideoUserTrailerWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type VideoViewListRelationFilter = {
  every?: Maybe<VideoViewWhereInput>;
  some?: Maybe<VideoViewWhereInput>;
  none?: Maybe<VideoViewWhereInput>;
};

export type VideoViewWhereInput = {
  AND?: Maybe<Array<VideoViewWhereInput>>;
  OR?: Maybe<Array<VideoViewWhereInput>>;
  NOT?: Maybe<Array<VideoViewWhereInput>>;
  id?: Maybe<IntFilter>;
  viewedAt?: Maybe<DateTimeFilter>;
  video?: Maybe<VideoMediaWhereInput>;
  videoId?: Maybe<IntFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
};

export type WrongCredentialsError = ErrorInterface & {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type CommunitiesOwnedPayload = CommunityResults | GenericError | NotAuthorizedError | InputError;

export type CommunityUpdateInput = {
  description?: Maybe<Scalars['String']>;
  privacyMode?: Maybe<PrivacyMode>;
  coverFileId?: Maybe<Scalars['FileId']>;
  interestIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type CommunityUpdatePayload = CommunityResult | GenericError | NotAuthorizedError | InputError | InterestNotFoundError | CommunityNotFoundError | CommunityRoleNotAuthorizedError | FileNotFoundError;

export type InterestCategoriesPayload = InterestCategoryResults | GenericError | NotAuthorizedError | InputError;

export type UserRefreshTokenPayload = AccessTokenResult | GenericError | NotAuthorizedError | InputError | UserNotFoundError | RefreshTokenExpiredError | AccessTokenExpiredError;

export type CreateTeamMutationVariables = Exact<{
  userId: Scalars['Int'];
  data: CommunityCreateInput;
}>;


export type CreateTeamMutation = { communityCreate?: Maybe<{ __typename: 'CommunityResult', community: { id: number, name: string } } | { __typename: 'GenericError' } | { __typename: 'NotAuthorizedError' } | { __typename: 'InputError' } | { __typename: 'InterestNotFoundError' } | { __typename: 'CommunityNameAlreadyTakenError' } | { __typename: 'FileNotFoundError' } | { __typename: 'UserNotFoundError' }> };

export type AccessTokenFragment = { accessToken: string, expiresIn: number, refreshToken: string };

export type UserFragment = { id: number, firstName?: Maybe<string>, lastName?: Maybe<string>, title?: Maybe<string>, phoneIndex?: Maybe<string>, phoneNumber?: Maybe<string>, isTermsAccepted: boolean, isActive: boolean, unreadFollowersCounter: number, countFollows: number, countFollowers: number, pushToken?: Maybe<string>, voipToken?: Maybe<string>, urlLinkedin?: Maybe<string>, lookingFors: Array<{ id: number, value: string, key: string }> };

export const AccessToken = gql`
    fragment AccessToken on AccessTokenResult {
  accessToken
  expiresIn
  refreshToken
}
    `;
export const User = gql`
    fragment User on User {
  id
  firstName
  lastName
  title
  phoneIndex
  phoneNumber
  isTermsAccepted
  isActive
  unreadFollowersCounter
  countFollows
  countFollowers
  pushToken
  voipToken
  urlLinkedin
  lookingFors {
    id
    value
    key
  }
}
    `;
export const CreateTeam = gql`
    mutation createTeam($userId: Int!, $data: CommunityCreateInput!) {
  communityCreate(userId: $userId, data: $data) {
    __typename
    ... on CommunityResult {
      community {
        id
        name
      }
    }
  }
}
    `;
export const AccessTokenFragmentDoc = `
    fragment AccessToken on AccessTokenResult {
  accessToken
  expiresIn
  refreshToken
}
    `;
export const UserFragmentDoc = `
    fragment User on User {
  id
  firstName
  lastName
  title
  phoneIndex
  phoneNumber
  isTermsAccepted
  isActive
  unreadFollowersCounter
  countFollows
  countFollowers
  pushToken
  voipToken
  urlLinkedin
  lookingFors {
    id
    value
    key
  }
}
    `;
export const CreateTeamDocument = `
    mutation createTeam($userId: Int!, $data: CommunityCreateInput!) {
  communityCreate(userId: $userId, data: $data) {
    __typename
    ... on CommunityResult {
      community {
        id
        name
      }
    }
  }
}
    `;
export const useCreateTeamMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateTeamMutation, TError, CreateTeamMutationVariables, TContext>) => 
    useMutation<CreateTeamMutation, TError, CreateTeamMutationVariables, TContext>(
      (variables?: CreateTeamMutationVariables) => fetchData<CreateTeamMutation, CreateTeamMutationVariables>(CreateTeamDocument, variables)(),
      options
    );