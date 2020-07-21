import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateProductData = {
  __typename?: 'CreateProductData';
  recordID?: Maybe<Scalars['Int']>;
  record?: Maybe<Product>;
  status?: Maybe<Status>;
  error?: Maybe<CreateProductError>;
};

export type CreateProductError = ProductAlreadyExistsError;

export type CreateProductPayload = {
  name: Scalars['String'];
  category: Scalars['String'];
};

export type Filter = {
  id?: Maybe<IntegerFilter>;
  name?: Maybe<StringFilter>;
  category?: Maybe<StringFilter>;
  OR?: Maybe<Array<Maybe<Filter>>>;
  AND?: Maybe<Array<Maybe<Filter>>>;
  NOT?: Maybe<Filter>;
};

export type IntegerFilter = {
  exact?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  products?: Maybe<ProductsMutations>;
};

export type Paginator = {
  __typename?: 'Paginator';
  numPages?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  workstations: Array<Workstation>;
};

export type ProductAlreadyExistsError = {
  __typename?: 'ProductAlreadyExistsError';
  message?: Maybe<Scalars['String']>;
};

export type ProductDoesntExistsError = {
  __typename?: 'ProductDoesntExistsError';
  message?: Maybe<Scalars['String']>;
};

export type ProductsMutations = {
  __typename?: 'ProductsMutations';
  create?: Maybe<CreateProductData>;
  update?: Maybe<UpdateProductData>;
};


export type ProductsMutationsCreateArgs = {
  payload: CreateProductPayload;
};


export type ProductsMutationsUpdateArgs = {
  payload: UpdateProductPayload;
};

export type ProductsPage = {
  __typename?: 'ProductsPage';
  objectList?: Maybe<Array<Maybe<Product>>>;
  paginator?: Maybe<Paginator>;
  pageNumber?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  tablet?: Maybe<Array<Maybe<Tablet>>>;
  workstations?: Maybe<Array<Maybe<Workstation>>>;
  products?: Maybe<ProductsPage>;
  product?: Maybe<Product>;
};


export type QueryProductsArgs = {
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  sorters?: Maybe<Array<Maybe<Sorter>>>;
  filters?: Maybe<Array<Maybe<Filter>>>;
};


export type QueryProductArgs = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SortableFields {
  Category = 'CATEGORY',
  Id = 'ID',
  Name = 'NAME'
}

export type Sorter = {
  field?: Maybe<SortableFields>;
  order?: Maybe<SortOrder>;
};

export enum Status {
  Error = 'ERROR',
  Ok = 'OK'
}

export type StringFilter = {
  exact?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
};

export type Tablet = {
  __typename?: 'Tablet';
  id: Scalars['ID'];
  name: Scalars['String'];
  workstations: Array<Workstation>;
};

export type UpdateProductData = {
  __typename?: 'UpdateProductData';
  recordID?: Maybe<Scalars['Int']>;
  record?: Maybe<Product>;
  status?: Maybe<Status>;
  error?: Maybe<UpdateProductError>;
};

export type UpdateProductError = ProductDoesntExistsError;

export type UpdateProductPayload = {
  id: Scalars['Int'];
  name: Scalars['String'];
  category: Scalars['String'];
};

export type Workstation = {
  __typename?: 'Workstation';
  id: Scalars['ID'];
  name: Scalars['String'];
  products: Array<Product>;
  tablets: Array<Tablet>;
};




      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "UNION",
        "name": "CreateProductError",
        "possibleTypes": [
          {
            "name": "ProductAlreadyExistsError"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UpdateProductError",
        "possibleTypes": [
          {
            "name": "ProductDoesntExistsError"
          }
        ]
      }
    ]
  }
};
      export default result;
    