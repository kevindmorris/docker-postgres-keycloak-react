# Docker + Postgres + Keycloak + React

## 📐 Architecture

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

## 🧪 Getting started

Build the docker stack:

```
docker compose up -d --build
docker compose down
```

Build the docker stack (development):

```
docker compose up -d postgres keycloak
npm i
npm run dev
```

