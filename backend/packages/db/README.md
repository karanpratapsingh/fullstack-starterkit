## Database package

This workspace package contains the database abstractions. The database stack is [PostgreSQL](https://www.postgresql.org/) as relational database and [Prisma](https://www.prisma.io/) as an ORM

**Commands**

Following npm scripts are available for convenience

* [yarn introspect](https://www.prisma.io/docs/reference/tools-and-interfaces/introspection)

* [yarn generate](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-cli)

* [yarn migrate:save](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-migrate)

* [yarn migrate:up](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-migrate)

* [yarn studio](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-studio)

**Note** 
On using migration commands `migrations` folder will be created, make sure to add it to your version control, prisma requires that folder to check if migrations matches or not. If the folder was accidentally removed make sure to drop the `_Migration` table in your postgres instance
