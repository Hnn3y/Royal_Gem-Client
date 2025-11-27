# Royal_gem

```mermaid
flowchart TD

    A[Landing Page]
    B[Sign Up]
    C[Login]
    D[Client Dashboard]
    E[Services List Page]
    F[Service Details Page]
    G[Booking / Order Page]
    H[Payment Page]
    I[Order Tracking Page]
    J[Order History Page]
    K[Notifications Page]
    L[Profile Page]
    M[Settings Page]
    N[Support / Help Page]

    %% Service Categories
    S1[Auto Repairs & Maintenance]
    S2[Parts Sale]
    S3[Garage Maps & Location]
    S4[Customer Service Reminder]
    S5[Vehicle Repair Pickup]
    S6[Tutorials Page]

    %% Main Flow
    A --> B
    A --> C
    B --> C
    C --> D
    D --> E
    F --> G
    G --> H
    H --> I
    D --> J
    D --> K
    D --> L
    D --> M
    D --> N

    %% Services Branch
    E --> S1
    E --> S2
    E --> S3
    E --> S4
    E --> S5
    E --> S6
    S1 --> F
    S2 --> F
    S3 --> F
    S4 --> F
    S5 --> F

    %% Tutorials Path
    S6 --> F
```

