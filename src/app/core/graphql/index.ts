import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the `full-date` format
   * outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   **/
  Date: any;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   **/
  DateTime: any;
  /**
   * A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format
   * outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   **/
  Time: any;
};

export enum Dummy {
  Dummy = 'DUMMY',
}

export type DummySubscriptionPayload = {
  __typename?: 'DummySubscriptionPayload';
  dummy?: Maybe<Scalars['String']>;
};

export type EnemyBoss = {
  __typename?: 'EnemyBoss';
  name?: Maybe<Scalars['String']>;
  type?: Maybe<EnemyBossType>;
};

export enum EnemyBossType {
  Regular = 'REGULAR',
  Ravine = 'RAVINE',
  Domain = 'DOMAIN',
}

export type EnemyMonster = {
  __typename?: 'EnemyMonster';
  name?: Maybe<Scalars['String']>;
};

export type ItemDrop = {
  __typename?: 'ItemDrop';
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _dummy?: Maybe<Scalars['String']>;
};

export type Node = {
  id: Scalars['ID'];
};

export type PasswordResult = {
  __typename?: 'PasswordResult';
  level?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  primaryItem?: Maybe<ItemDrop>;
  secondaryItem?: Maybe<ItemDrop>;
  monster?: Maybe<EnemyMonster>;
  boss?: Maybe<EnemyBoss>;
  mapName?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  node?: Maybe<Node>;
  password: Array<PasswordResult>;
  itemName: Array<PasswordResult>;
  _dummy?: Maybe<Scalars['String']>;
};

export type QueryNodeArgs = {
  id: Scalars['ID'];
};

export type QueryPasswordArgs = {
  input: Scalars['String'];
  levelLimit?: Maybe<Scalars['Int']>;
};

export type QueryItemNameArgs = {
  input: Scalars['String'];
  levelLimit?: Maybe<Scalars['Int']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  _dummy?: Maybe<DummySubscriptionPayload>;
};

export type GetByPasswordQueryVariables = {
  input: Scalars['String'];
  levelLimit?: Maybe<Scalars['Int']>;
};

export type GetByPasswordQuery = { __typename?: 'Query' } & { password: Array<{ __typename?: 'PasswordResult' } & PasswordResultFragment> };

export type GetByItemNameQueryVariables = {
  input: Scalars['String'];
  levelLimit?: Maybe<Scalars['Int']>;
};

export type GetByItemNameQuery = { __typename?: 'Query' } & { itemName: Array<{ __typename?: 'PasswordResult' } & PasswordResultFragment> };

export type PasswordResultFragment = { __typename?: 'PasswordResult' } & Pick<PasswordResult, 'password' | 'level' | 'cost' | 'mapName'> & {
    primaryItem: Maybe<{ __typename?: 'ItemDrop' } & Pick<ItemDrop, 'name'>>;
    secondaryItem: Maybe<{ __typename?: 'ItemDrop' } & Pick<ItemDrop, 'name'>>;
    monster: Maybe<{ __typename?: 'EnemyMonster' } & Pick<EnemyMonster, 'name'>>;
    boss: Maybe<{ __typename?: 'EnemyBoss' } & Pick<EnemyBoss, 'name' | 'type'>>;
  };

export const PasswordResultFragmentDoc = gql`
  fragment passwordResult on PasswordResult {
    password
    level
    cost
    mapName
    primaryItem {
      name
    }
    secondaryItem {
      name
    }
    monster {
      name
    }
    boss {
      name
      type
    }
  }
`;
export const GetByPasswordDocument = gql`
  query GetByPassword($input: String!, $levelLimit: Int) {
    password(input: $input, levelLimit: $levelLimit) {
      ...passwordResult
    }
  }
  ${PasswordResultFragmentDoc}
`;

@Injectable({
  providedIn: 'root',
})
export class GetByPasswordGQL extends Apollo.Query<GetByPasswordQuery, GetByPasswordQueryVariables> {
  document = GetByPasswordDocument;
}
export const GetByItemNameDocument = gql`
  query GetByItemName($input: String!, $levelLimit: Int) {
    itemName(input: $input, levelLimit: $levelLimit) {
      ...passwordResult
    }
  }
  ${PasswordResultFragmentDoc}
`;

@Injectable({
  providedIn: 'root',
})
export class GetByItemNameGQL extends Apollo.Query<GetByItemNameQuery, GetByItemNameQueryVariables> {
  document = GetByItemNameDocument;
}
