import React from 'react';
import { useTitle } from '../hooks/useTitle';

const Blogs = () => {

    useTitle('Blogs')
    return (
        <div>
            <div className='space-y-5 card border  p-5'>


                <h1 className='font-bold text-2xl'>1. What is an access token and refresh token? </h1>
                <p>Access Token: An access token is a credential that is used to authenticate and authorize a user's access to protected resources in an application. It typically contains information about the user and their permissions, and it has a limited lifespan. Access tokens are usually issued by an authentication server upon successful login and are included in each request to access protected resources.
                    Access tokens should be stored securely on the client-side, typically in memory or in a secure storage mechanism like browser storage (e.g., localStorage or sessionStorage).
                    <br /> <br />
                    Refresh Token: A refresh token is a credential that is used to obtain a new access token after the previous one expires. Refresh tokens have a longer lifespan compared to access tokens. When an access token expires, the client can use the refresh token to request a new access token without requiring the user to log in again.
                    Refresh tokens should be stored securely on the client-side as well, but in a more persistent storage mechanism such as an HTTP-only cookie or secure storage (e.g. secure browser cookie, secure key-value store). </p>
            </div>



            <div className='space-y-5 card border  p-5'>
                <h1 className='font-bold text-2xl'>2. Compare SQL and NoSQL databases?</h1>
                <p>SQL Databases: SQL (Structured Query Language) databases are based on a relational data model. They store data in tables with predefined schemas, and relationships between tables are established using foreign keys. SQL databases provide ACID (Atomicity, Consistency, Isolation, Durability) guarantees, support complex queries, and are suitable for applications with structured data and complex relationships between entities.
                    <br /> <br />
                    NoSQL Databases: NoSQL (Not Only SQL) databases use various data models other than the traditional relational model. They are designed to handle unstructured, semi-structured, and structured data. NoSQL databases offer high scalability, flexible schemas, and eventual consistency. They are suitable for applications with large amounts of data, high read/write throughput, and dynamic data structures.</p>



            </div>

            <div className='space-y-5 card border  p-5'>

                <h1 className='font-bold text-2xl'>3. What is express js? What is Nest JS (google it)?</h1>
                <p>Express.js: Express.js is a popular web application framework for Node.js. It provides a minimal and flexible set of features for building web and API applications. Express.js focuses on simplicity, extensibility, and performance, allowing developers to quickly create server-side applications and APIs using JavaScript or TypeScript. <br /> <br />
Nest.js: Nest.js is a progressive, opinionated framework for building efficient and scalable server-side applications. It is built with TypeScript and leverages features from Express.js, providing additional structure and modularity. Nest.js follows the modular architecture pattern and provides a powerful dependency injection system, making it suitable for building large-scale enterprise applications.</p>
            </div>


            <div className='space-y-5 card border  p-5'>
                <h1  className='font-bold text-2xl'> 4. What is MongoDB aggregate and how does it work (google it)?</h1>
                <p>MongoDB Aggregate: MongoDB's aggregation framework is a powerful feature that allows for data processing and analysis within the database. It provides a way to perform advanced data manipulation, transformations, and aggregations, similar to SQL's GROUP BY, JOIN, and other aggregate functions. MongoDB's aggregation pipeline consists of multiple stages that can filter, transform, group, sort, and project data.
                    
                    <br /> It supports a wide range of operators and expressions, enabling developers to perform complex queries and analytics on their data.</p>



            </div>



            <div>


                
            </div>
        </div>
    );
};

export default Blogs;