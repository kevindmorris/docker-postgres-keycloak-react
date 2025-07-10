# Docker + Postgres + Keycloak + React

```mermaid
graph LR
    client <--> react
    client[Client]

    subgraph Docker
        direction TB

        postgres[Postgres]
        keycloak[Keycloak]
        react[React]

        react <--> keycloak
        keycloak <--> postgres
    end
```
