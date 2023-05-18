import React from 'react';

const Blogs = () => {
    return (
        <div>
           <div className='space-y-5 card border  p-5'>


            <h1 className='font-bold text-2xl'>1. What is an access token and refresh token? </h1>
            <p>Access Token: An access token is a credential that is used to authenticate and authorize a user's access to protected resources in an application. It typically contains information about the user and their permissions, and it has a limited lifespan. Access tokens are usually issued by an authentication server upon successful login and are included in each request to access protected resources.
            Access tokens should be stored securely on the client-side, typically in memory or in a secure storage mechanism like browser storage (e.g., localStorage or sessionStorage).
                <br />
Refresh Token: A refresh token is a credential that is used to obtain a new access token after the previous one expires. Refresh tokens have a longer lifespan compared to access tokens. When an access token expires, the client can use the refresh token to request a new access token without requiring the user to log in again.
Refresh tokens should be stored securely on the client-side as well, but in a more persistent storage mechanism such as an HTTP-only cookie or secure storage (e.g., secure browser cookie, secure key-value store). </p>
           </div>



           <div className='space-y-5 card border  p-5'>
            <h1 className='font-bold text-2xl'>2. Compare SQL and NoSQL databases?</h1>
            <p>SQL Databases: SQL (Structured Query Language) databases are based on a relational data model. They store data in tables with predefined schemas, and relationships between tables are established using foreign keys. SQL databases provide ACID (Atomicity, Consistency, Isolation, Durability) guarantees, support complex queries, and are suitable for applications with structured data and complex relationships between entities.
                <br /> <br />
NoSQL Databases: NoSQL (Not Only SQL) databases use various data models other than the traditional relational model. They are designed to handle unstructured, semi-structured, and structured data. NoSQL databases offer high scalability, flexible schemas, and eventual consistency. They are suitable for applications with large amounts of data, high read/write throughput, and dynamic data structures.</p>



           </div>
        </div>
    );
};

export default Blogs;