Below is the complete **`HoneyChain_SIH_Prototype_Software_Spec.md`** content in copy-paste-ready Markdown format.

> The structure is based on the submitted HoneyChain technical approach, particularly the documented beekeeper journey, consumer journey, telemetry → analytics → lot → lab → blockchain flow, and listed software stack. 

---

# HoneyChain — SIH Software Prototype Specification

**Project:** HoneyChain / MadhuMitra
**Purpose:** SIH 2026 Software Prototype
**Primary Objective:** Demonstrate the complete digital evidence journey from hive activity to consumer verification.

---

## 1. Prototype Objective

The software prototype should allow an evaluator to **experience the HoneyChain workflow**, not merely read about it.

### Core system story

```text
HIVE
  ↓
SENSOR DATA
  ↓
SIGNED TELEMETRY
  ↓
HARVEST CANDIDATE
  ↓
HUMAN CONFIRMATION
  ↓
RAW HONEY LOT
  ↓
PROCESSING BATCH
  ↓
LAB EVIDENCE
  ↓
BLOCKCHAIN ANCHOR
  ↓
CONSUMER VERIFICATION
  ↓
REPLAY DETECTION
```

### Core product proposition

> **HoneyChain turns a physical honey extraction event into a verifiable digital lot by combining signed edge telemetry, human-confirmed event detection, transformation genealogy, laboratory evidence, and blockchain anchoring.**

The submitted technical approach already defines the major flow from hive/edge capture through analytics, human confirmation, traceability, laboratory evidence, blockchain anchoring and consumer access. 

---

# 2. Prototype Philosophy

The prototype should **not** become a giant enterprise ERP.

The evaluator should understand the core system in approximately **90 seconds**.

## 90-second evaluator journey

1. Open landing page.
2. Click **Explore Demo**.
3. Open beekeeper dashboard.
4. Select a hive.
5. Inspect telemetry.
6. See **Harvest Point Reached**.
7. Review evidence.
8. Confirm harvest.
9. Create Raw Honey Lot.
10. Open lot genealogy.
11. Inspect lab evidence.
12. Inspect blockchain anchor.
13. Open consumer verification.
14. Verify credential.
15. Attempt a second verification.
16. Trigger **Replay Warning**.

---

# 3. Product Naming

The current material uses multiple names:

* MadhuMitra
* HoneyChain
* HoneyChain SaaS
* HoneyChain Sentinel
* MadhuMitra Analytics

This should be normalized before the final prototype.

## Recommended naming hierarchy

### Main product

# MADHUMITRA

### Descriptor

**HoneyChain Traceability & Smart Beekeeping Platform**

### Internal modules

* HoneyChain Traceability
* MadhuMitra Analytics

Do not make multiple names appear as independent products.

---

# 4. Scope

## P0 — MUST HAVE

These features form the core SIH prototype:

* Landing page
* Beekeeper dashboard
* Hive monitoring
* Telemetry visualization
* Harvest candidate detection
* Human confirmation
* Raw Honey Lot creation
* Lot/batch genealogy
* Laboratory evidence
* Blockchain anchor/evidence view
* Consumer verification
* One-use credential
* Replay warning
* Demo Mode

## P1 — SHOULD HAVE

* Processing batch screen
* Mass accounting
* FPO/cooperative dashboard
* PWA installation
* System status
* Evidence/export summary

## P2 — OPTIONAL

Only after P0 is stable:

* Advanced administrative controls
* Advanced analytics
* Extended exporter workflows
* Advanced AI research screens
* 3D/comb-volume validation
* Native APK packaging

## Do NOT prioritize

* Generic AI chatbot
* Social feed
* E-commerce
* Payment gateway
* Complex profiles
* Huge admin panel
* Large notification center
* Crypto wallet connection
* Full ERP
* Dozens of unrelated analytics pages

---

# 5. Primary Users

## 5.1 Beekeeper / Producer

Primary operating user.

Needs to:

* monitor hives
* inspect telemetry
* review harvest candidates
* confirm/reject events
* create Raw Honey Lots
* inspect lot history

## 5.2 FPO / Cooperative

Needs to:

* monitor multiple hives
* inspect candidate events
* monitor lots
* inspect laboratory status
* inspect evidence

## 5.3 Processor / Brand / Exporter

Needs to:

* view lot genealogy
* inspect processing batches
* inspect laboratory evidence
* access traceability records
* generate evidence packages

## 5.4 Consumer

Needs to:

* scan QR
* enter one-use PIN/credential
* view honey journey
* verify recorded evidence
* receive replay warning when a credential is reused

## 5.5 Evaluator

Special prototype persona.

Should be able to:

* start Demo Mode
* execute the full golden path
* inspect technical evidence
* verify the security story

---

# 6. Navigation

Recommended application structure:

```text
HOME
│
├── DEMO
│   ├── Dashboard
│   ├── Hive Monitoring
│   ├── Harvest Candidate
│   ├── Create Lot
│   └── Traceability
│
├── VERIFY
│   ├── QR / Credential
│   └── Consumer Journey
│
├── FPO
│   └── Cooperative Dashboard
│
└── TECH
    ├── Architecture
    └── System Status
```

Keep the navigation shallow.

The evaluator should not need to understand a complex information architecture.

---

# 7. Landing Page

## Status

**Already prepared.**

## Purpose

The landing page is the entry point, not the main application.

## Primary CTAs

### CTA 1

**Explore Demo**

→ Opens beekeeper dashboard.

### CTA 2

**Verify a Honey Lot**

→ Opens consumer verification.

### CTA 3

**View Architecture**

→ Opens technical architecture.

### Optional

**Install Field App**

→ Opens PWA installation.

Do not make APK download the primary entry point.

---

# 8. Beekeeper Dashboard

## Route

```text
/demo/dashboard
```

## Purpose

Give the beekeeper a single operational overview.

## Header

Display:

* Product name
* Apiary
* Demo/Live state
* Last sync
* Current user/role

Example:

```text
MADHUMITRA

Apiary: Demo Farm
Mode: DEMO DATA
Last Sync: 12:42 PM
```

---

## Summary Cards

### Hives

```text
12
```

### Online

```text
10 / 12
```

### Harvest Candidates

```text
2
```

### Active Lots

```text
7
```

Any synthetic values must be clearly labelled as demo data.

---

## Hive Cards

Example:

```text
HIVE H01

Weight
43.82 kg

Temperature
31.4°C

Humidity
71%

Status
Stable

Last Reading
12:42 PM
```

Candidate example:

```text
HIVE H02

Weight
38.16 kg

Temperature
32.1°C

Humidity
74%

Status
Harvest Candidate

Last Reading
12:38 PM
```

### Actions

* **Open Hive**
* **Review Candidate**
* **View Lot**
* **Create Lot**

---

# 9. Hive Monitoring / Telemetry Page

## Route

```text
/demo/hives/:hiveId
```

## Purpose

Demonstrate that the product is backed by an IoT sensing layer rather than being only a traceability website.

The technical approach specifies ESP32-S3, HX711, BME280, local buffering, telemetry and backend ingestion.  

---

## Hive Identity

Display:

* Hive ID
* Device ID
* Apiary
* Last synchronization
* Device status

---

## Sensor Data

Display:

* Weight
* Temperature
* Humidity
* Timestamp

---

## Main Graph

### Title

**Hive Weight — Last 24 Hours**

The weight graph should clearly show the extraction-related change.

Example:

```text
Weight

45 kg ─────────────────────╮
                            │
43 kg ─────────────────────╯
                            │
40 kg                         ● Harvest Candidate
```

---

## Secondary Telemetry

Optional compact charts:

* Temperature
* Humidity

Do not overload the screen.

---

## Technical Evidence Panel

Example:

```text
DEVICE EVIDENCE

Device
ESP32-S3-H01

Timestamp
2026-09-29 12:38:21

Signature
VALID

Nonce
48291

Payload
VERIFIED
```

Only show "VALID" / "VERIFIED" when the actual verification logic has run.

---

## Connectivity State

Examples:

```text
ONLINE
```

```text
OFFLINE — BUFFERING
```

```text
SYNCING 18 RECORDS
```

---

# 10. Harvest Candidate Page

## Route

```text
/demo/harvest-candidates/:candidateId
```

## Purpose

This is one of the most important screens in the entire prototype.

The deck explicitly establishes:

> Extraction detected → Beekeeper confirms. 

---

# Harvest Point Reached

### Subtitle

> **A stable weight drop signals a potential extraction event.**

The wording should communicate that the system detects a **candidate**, not an autonomous final decision.

---

## Candidate Evidence

```text
HARVEST CANDIDATE

Hive
H01

Previous Weight
44.72 kg

Current Weight
40.91 kg

Weight Change
−3.81 kg

Time
12:31 PM

Temperature
31.2°C

Humidity
70%
```

---

## Detection Checks

```text
Weight Pattern        ✓
Telemetry Signature   ✓
Hive Identity         ✓
Timestamp             ✓
```

---

## Decision

### Primary

**Confirm Harvest**

### Secondary

**Reject Candidate**

---

## Explanation

> Candidate generated from the observed telemetry pattern. Final harvest confirmation remains with the beekeeper.

---

# 11. Human Confirmation

The human gate must be visually obvious.

```text
AUTOMATED OBSERVATION
        ↓
HARVEST CANDIDATE
        ↓
BEEKEEPER REVIEW
        ↓
CONFIRM / REJECT
        ↓
CREATE RAW HONEY LOT
```

Do not design the UI so that AI appears to autonomously declare the harvest.

---

# 12. Create Raw Honey Lot

## Route

```text
/demo/lots/create
```

## Purpose

Convert the confirmed physical event into a traceable software object.

---

## Form

### Lot ID

```text
HC-H01-20260929-001
```

### Hive

```text
H01
```

### Harvest Time

```text
29 Sep 2026 · 12:31 PM
```

### Measured Harvest

```text
3.81 kg
```

### Operator

```text
Beekeeper-01
```

Only include fields that actually exist in the backend.

---

## Action

**Create Lot**

---

## Success State

```text
RAW HONEY LOT CREATED

Lot ID
HC-H01-20260929-001

Source Hive
H01

Harvest Quantity
3.81 kg

Status
RECORDED
```

---

## Product Meaning

> A physical extraction event is now represented as a traceable digital lot.

This is one of the central concepts in the submitted architecture. 

---

# 13. Raw Honey Lot Detail Page

## Route

```text
/demo/lots/:lotId
```

## Fields

* Lot ID
* Source hive
* Apiary
* Harvest timestamp
* Harvest quantity
* Operator
* Harvest event ID
* Evidence status
* Lab status
* Blockchain status
* Consumer credential status

---

## Status Flow

```text
HARVEST CONFIRMED
        ↓
RAW LOT CREATED
        ↓
PROCESSING
        ↓
LAB EVIDENCE
        ↓
BLOCKCHAIN ANCHOR
        ↓
PACKAGING
        ↓
CONSUMER CREDENTIAL
```

---

# 14. Traceability / Lot Genealogy Page

## Route

```text
/demo/traceability/:lotId
```

## Purpose

This should be a flagship screen.

It demonstrates that HoneyChain is about **genealogy**, not just a QR code.

---

## Main Genealogy

```text
HIVE H01
   │
   ▼
RAW HONEY LOT
HC-H01-20260929-001
   │
   ▼
PROCESSING BATCH
PB-2026-091
   │
   ▼
PACKAGING LOT
PK-2026-091
   │
   ▼
CONSUMER CREDENTIAL
CR-000184
```

The submitted technical approach already describes the Raw Honey Lot → Processing Batch → mass accounting → laboratory evidence → blockchain → consumer chain. 

---

## Timeline

### 29 Sep

Harvest recorded

### 29 Sep

Raw Honey Lot created

### 30 Sep

Processing Batch created

### 30 Sep

Lab CoA uploaded

### 30 Sep

Evidence hash anchored

### 01 Oct

Packaging Lot created

Each stage should preserve its identity.

---

# 15. Processing Batch Page

## Route

```text
/demo/batches/:batchId
```

## Purpose

Demonstrate transformation genealogy and record-level mass accounting.

---

## Example

```text
PROCESSING BATCH
PB-2026-091

INPUT

Raw Honey Lot A
3.81 kg

Raw Honey Lot B
4.22 kg

TOTAL INPUT
8.03 kg

OUTPUT

Packaged Honey
7.82 kg
```

---

## Mass Result

```text
✓ OUTPUT WITHIN RECORDED INPUT
```

Controlled failure example:

```text
⚠ OUTPUT EXCEEDS RECORDED INPUT
```

This demonstrates a consistency check.

Do **not** state that this mathematically proves physical non-adulteration.

---

# 16. Mass Accounting

## Core logic

```text
INPUT QUANTITY
      ↓
TRANSFORMATION
      ↓
OUTPUT QUANTITY
      ↓
CONSISTENCY CHECK
```

Possible checks:

* total input
* total output
* lot genealogy
* theoretical quantity boundary
* recorded transformation

---

# 17. Laboratory Evidence Page

## Route

```text
/demo/lots/:lotId/lab
```

## Purpose

Show how a laboratory document becomes cryptographically linked to a honey lot.

The deck describes NABL/ISO 17025 laboratory evidence, SHA-256 and blockchain anchoring. 

---

## Example

```text
LABORATORY CERTIFICATE OF ANALYSIS

Lot ID
HC-H01-20260929-001

Laboratory
NABL-Accredited Laboratory

Document
CoA_0929.pdf

SHA-256
8a91...72df

Blockchain Anchor
0x84c2...9a11

Status
✓ VERIFIED
```

---

## Actions

* **View Certificate**
* **Verify Hash**
* **View Blockchain Anchor**

---

## Verification Flow

```text
DOWNLOADED PDF
      ↓
SHA-256
      ↓
COMPARE WITH RECORDED FINGERPRINT
      ↓
MATCH / MISMATCH
```

The system should represent **document integrity**, not laboratory correctness.

The laboratory provides analytical evidence.

HoneyChain verifies that the referenced document has not been silently swapped.

---

# 18. Blockchain Evidence Page

## Route

```text
/demo/blockchain/:lotId
```

## Purpose

Show exactly what is anchored.

---

## Example

```text
BLOCKCHAIN ANCHOR

Network
Polygon Amoy

Lot ID
HC-H01-20260929-001

Document Hash
8a91...72df

Merkle Root
53a7...c201

Transaction
0x8b2f...91ad

Status
✓ CONFIRMED
```

---

## External Action

**View on Explorer ↗**

Only expose a real explorer transaction.

---

## Design Principle

Do not build a full blockchain explorer.

Show only trust-critical information.

---

# 19. On-Chain vs Off-Chain

## Off-chain

Examples:

* high-volume telemetry
* raw sensor data
* PDF documents
* personal information
* application metadata

## On-chain / anchored

Examples:

* lot IDs, where required
* evidence fingerprints
* document hashes
* Merkle roots
* nonce commitments
* trust-critical state

Suggested UI copy:

> **High-volume data stays off-chain. Trust-critical fingerprints and state are anchored for verification.**

---

# 20. Consumer Verification

## Route

```text
/verify
```

## Purpose

Complete the producer → consumer journey.

---

## Credential Entry

```text
VERIFY HONEY LOT

Scan QR

or

Enter One-Use PIN
```

Primary CTA:

**Verify**

The consumer should not need a blockchain wallet.

---

# 21. Consumer Journey Page

## Route

```text
/verify/:credential
```

## Header

# Verified Honey Journey

---

## Summary

```text
Honey Lot
HC-H01-20260929-001

Source Hive
H01

Harvest Quantity
3.81 kg

Verification
✓ VALID
```

---

## Timeline

```text
Hive H01
     ↓
Harvest
29 Sep · 12:31
     ↓
Processing Batch
PB-2026-091
     ↓
Laboratory Evidence
✓ HASH VERIFIED
     ↓
Blockchain Anchor
✓ RECORDED
```

Consumer-facing UI should use plain language.

---

# 22. One-Use Credential / Anti-Replay

## First verification

```text
✓ CREDENTIAL VERIFIED

This credential is valid.
```

Then show the journey.

---

## Second verification

```text
⚠ CREDENTIAL ALREADY CLAIMED

Original verification:
29 Sep 2026 · 13:02 IST
```

The submitted deck explicitly describes a single-use scratch nonce/credential approach for duplicate-claim detection. 

Do not claim that a QR code physically prevents copying. The software detects reuse of the protected credential state.

---

# 23. QR Flow

```text
PHYSICAL PACKAGE
      ↓
PUBLIC QR
      ↓
VERIFICATION PAGE
      ↓
ONE-USE CREDENTIAL
      ↓
CREDENTIAL CHECK
      ↓
HONEY JOURNEY
      ↓
EVIDENCE VERIFICATION
```

Do not expose private beekeeper information through the public QR flow.

---

# 24. FPO / Cooperative Dashboard

## Route

```text
/fpo
```

## Purpose

Demonstrate multi-hive scalability.

The submitted architecture explicitly includes an FPO portal/cooperative orientation. 

---

## Summary

```text
FPO
Titwala Cooperative

Hives
48

Active Lots
16

Processing Batches
7

Lab Reports
12

Pending Reviews
2
```

All synthetic values should be labelled as demo data.

---

## Lot Table

| Lot   | Hive |    Mass | Lab     | Status   |
| ----- | ---- | ------: | ------- | -------- |
| HC001 | H01  | 3.81 kg | ✓       | Verified |
| HC002 | H03  | 4.20 kg | ✓       | Verified |
| HC003 | H07  | Pending | Pending | Review   |

---

## Purpose

Demonstrate:

* multi-hive visibility
* cooperative deployment
* centralized evidence
* multiple lot monitoring

Do not make this a full ERP.

---

# 25. Export / Evidence View

## Route

```text
/fpo/export
```

## Purpose

Show structured traceability evidence preparation.

Possible fields:

* lot ID
* source hive
* processing batch
* laboratory evidence
* verification status
* evidence-package status

Use:

> **Traceability / Evidence Package**

instead of:

> **Guaranteed Compliance**

The system can organize evidence; it should not claim to guarantee acceptance by external authorities.

---

# 26. System Status

## Route

```text
/tech/status
```

Optional but useful during a live demo.

```text
SYSTEM STATUS

IoT Nodes
12 / 12

API
Operational

Database
Operational

Blockchain
Connected

Object Storage
Operational

Analytics
Operational
```

If a subsystem is simulated:

```text
SIMULATED
```

or:

```text
DEMO
```

must be visible.

---

# 27. Demo Mode

## Requirement

**Build Demo Mode even if it is not visible in the final PPT.**

The evaluator should not depend on a real sensor event occurring naturally.

---

## Demo Control

Landing page:

**Run Guided Demo**

---

## Demo Sequence

### 1. Normal telemetry

Display stable hive data.

### 2. Controlled weight drop

Trigger a known event.

### 3. Candidate state

Show:

> **Harvest Point Reached**

### 4. Evidence

Show:

* weight before
* weight after
* delta
* timestamp
* signature status

### 5. Human confirmation

Click:

> **Confirm Harvest**

### 6. Lot creation

Create:

`HC-H01-20260929-001`

### 7. Processing record

Load or create a processing batch.

### 8. Lab evidence

Attach/sample a CoA.

### 9. Hash

Generate SHA-256.

### 10. Blockchain

Show actual anchor.

### 11. Credential

Generate/load a consumer credential.

### 12. Consumer verification

Verify successfully.

### 13. Replay

Run the same credential again.

### 14. Result

Show:

> **Replay Warning**

---

## Demo Reset

Provide:

**Reset Demo**

The evaluator should be able to repeat the flow.

---

# 28. Demo Data

Use a deterministic dataset for the demonstration.

## Example Hive

```text
H01
```

## Device

```text
ESP32-S3-H01
```

## Telemetry

```text
Weight
44.72 kg

Temperature
31.2°C

Humidity
70%
```

## Candidate

```text
Candidate ID
HC-CAND-0001

Weight Drop
3.81 kg

Status
Pending Confirmation
```

## Raw Lot

```text
HC-H01-20260929-001
```

## Processing Batch

```text
PB-2026-091
```

## Packaging Lot

```text
PK-2026-091
```

## Credential

```text
CR-000184
```

These are demonstration values unless generated from actual hardware records.

---

# 29. State Labels

Every screen should make system state clear.

## LIVE

Actual connected data.

## DEMO

Deterministic demonstration data.

## SIMULATED

Generated input used to demonstrate functionality.

## PROTOTYPE

Feature exists but is not represented as production-ready.

## RESEARCH

Experimental feature.

These labels prevent prototype claims from being mistaken for field deployment claims.

---

# 30. AI / Analytics UI

Do not use generic:

> "AI Magic"

language.

The system should show specific functions.

## Primary

### Harvest Event Detection

Identify candidate extraction events from telemetry.

## Secondary

### Anomaly Screening

Provide unusual-pattern context.

## Human

### Beekeeper Confirmation

Beekeeper remains the final decision-maker.

---

## Recommended UI

```text
ANALYTICS

Harvest Event Detector
Candidate Detected

Anomaly Screening
Pattern Requires Review

Final Decision
Pending Beekeeper Confirmation
```

The deck specifically describes a Step Detector, Isolation Forest and human review path. 

---

# 31. AI Scope Restrictions

Do not present the following as established capability unless actually validated:

* disease diagnosis
* honey purity detection from IoT data
* fully autonomous harvesting
* guaranteed adulteration detection
* guaranteed swarm prediction
* guaranteed honey-volume estimation

The presence of a model name does not establish performance.

---

# 32. MoGe-3 / Lotus-2

The technical deck references:

* MoGe-3
* Lotus-2
* single-photo 3D point cloud
* honey-volume estimation
* cross-validation against HX711. 

Treat this as a secondary capability unless it is genuinely implemented and demonstrated.

## If implemented

Create:

```text
/advanced/comb-validation
```

with:

* input photograph
* generated geometry
* estimated volume
* scale reading
* comparison/error

## If not implemented

Do not make it part of the primary demo flow.

---

# 33. PWA

The deck specifies a React/Vite frontend and Web Crypto/consumer verification flow. 

## Primary recommendation

Use the PWA rather than making an APK the primary experience.

---

## CTA

Use:

**Open Field App**

or:

**Install Field App**

not:

**Download APK**

---

## PWA requirements

* responsive mobile UI
* installable manifest
* service worker
* offline-friendly application shell
* synchronization status
* local state where appropriate

Do not claim complete end-to-end offline operation if the system still requires later backend synchronization.

---

# 34. App Download

Do not make APK download the principal product experience.

Recommended:

```text
FIELD APP

Open HoneyChain directly in your browser.

[ Open Field App ]

[ Install on Device ]
```

Optional:

```text
Android APK
For testing only
```

Only provide an APK if it actually exists and has been tested.

---

# 35. Backend Expectations

A reasonable prototype API should be organized around domain objects.

Example endpoint structure:

```text
/api/hives
/api/hives/:id/telemetry

/api/harvest-candidates
/api/harvest-candidates/:id/confirm
/api/harvest-candidates/:id/reject

/api/lots
/api/lots/:id
/api/lots/:id/genealogy

/api/batches
/api/batches/:id

/api/lots/:id/lab
/api/lots/:id/blockchain

/api/credentials
/api/credentials/:id/verify
```

These are recommended endpoint groupings, not a claim that they currently exist.

---

# 36. Database Objects

## Devices

```text
device_id
hive_id
status
last_seen
```

## Hives

```text
hive_id
apiary_id
device_id
status
```

## Telemetry

```text
hive_id
timestamp
weight
temperature
humidity
signature
nonce
verification_status
```

## Harvest Candidates

```text
candidate_id
hive_id
detected_at
weight_before
weight_after
weight_delta
status
```

Possible statuses:

```text
PENDING
CONFIRMED
REJECTED
```

## Raw Honey Lots

```text
lot_id
source_hive
harvest_event_id
harvest_time
quantity
status
```

## Processing Batches

```text
batch_id
input_lots
output_quantity
mass_check_status
```

## Packaging Lots

```text
package_lot_id
batch_id
quantity
status
```

## Laboratory Evidence

```text
lab_id
lot_id
document_name
sha256
laboratory
verification_status
```

## Blockchain Anchors

```text
lot_id
network
transaction_hash
document_hash
merkle_root
status
```

## Consumer Credentials

```text
credential_id
lot_id
nonce_commitment
claim_status
first_claimed_at
```

---

# 37. Core Data Relationship

```text
APIARY
  ↓
HIVE
  ↓
DEVICE
  ↓
TELEMETRY
  ↓
HARVEST CANDIDATE
  ↓
CONFIRMED HARVEST
  ↓
RAW HONEY LOT
  ↓
PROCESSING BATCH
  ↓
PACKAGING LOT
  ↓
CONSUMER CREDENTIAL
```

Laboratory evidence attaches to the appropriate lot/batch.

Blockchain anchors trust-critical evidence.

---

# 38. Security UX

Security should be communicated through **verifiable states**, not marketing statements.

## Telemetry

```text
✓ TELEMETRY SIGNATURE VALID
```

## Document

```text
✓ SHA-256 MATCH
```

## Blockchain

```text
✓ ANCHOR CONFIRMED
```

## Credential

```text
✓ CREDENTIAL VALID
```

## Replay

```text
⚠ CREDENTIAL ALREADY CLAIMED
```

Avoid:

> 100% Secure

or similar unsupported claims.

---

# 39. Privacy UX

Use a simple architectural statement:

> **No beekeeper personal data is stored on-chain.**

Do not put private beekeeper information into public blockchain records.

Do not claim full legal compliance solely from this architecture.

---

# 40. Error States

These are important for credibility.

## Invalid signature

```text
SIGNATURE VERIFICATION FAILED

Telemetry rejected.
```

## Invalid document

```text
DOCUMENT VERIFICATION FAILED

The downloaded file does not match the anchored fingerprint.
```

## Replay

```text
CREDENTIAL ALREADY CLAIMED
```

## Mass accounting issue

```text
MASS ACCOUNTING WARNING

Recorded output exceeds available input.
```

## Device offline

```text
DEVICE OFFLINE

New readings are being buffered locally.
```

## Synchronization recovered

```text
CONNECTION RESTORED

18 buffered records synchronized.
```

---

# 41. Loading States

Use realistic states:

```text
Verifying Signature...
```

```text
Creating Raw Honey Lot...
```

```text
Generating Document Fingerprint...
```

```text
Anchoring Evidence...
```

```text
Checking Credential...
```

Do not use artificial loading times merely to appear complex.

---

# 42. Technical Evidence Drawer

Every important event should have:

**View Evidence**

Example:

```text
HARVEST CANDIDATE

[ View Evidence ]
```

Drawer:

```text
Hive ID
H01

Timestamp
2026-09-29 12:31:10

Weight Before
44.72 kg

Weight After
40.91 kg

Signature
VALID

Nonce
48291

Candidate Status
CONFIRMED
```

This gives a judge technical depth without forcing them through the whole architecture.

---

# 43. Traceability Visualization

Avoid a plain database table as the main view.

Use:

```text
SOURCE
Hive H01
   ↓
HARVEST
Lot HC-H01-20260929-001
   ↓
TRANSFORMATION
Batch PB-2026-091
   ↓
PACKAGING
PK-2026-091
   ↓
CONSUMER
Credential CR-000184
```

Each node should open relevant evidence.

---

# 44. Consumer UX

Consumers should not need to understand:

* Polygon
* ECDSA
* Merkle roots
* smart contracts
* TimescaleDB

They need to understand:

> Where did this honey come from?

> When was it harvested?

> Which batch did it enter?

> Is the referenced lab document verified?

> Is this credential valid?

Technical information can exist behind:

**View Technical Evidence**

---

# 45. Beekeeper UX

The beekeeper should not manually:

* calculate hashes
* submit blockchain transactions
* operate crypto wallets
* copy sensor payloads
* manage Merkle trees

The technology should remain invisible where possible.

Prefer:

**Confirm Harvest**

instead of:

**Submit Blockchain Transaction**

---

# 46. FPO UX

FPO users care about:

* hives
* candidates
* harvests
* lots
* batches
* lab status
* verification

Advanced cryptography should remain inside evidence drawers.

---

# 47. Technical Architecture Page

## Route

```text
/tech
```

## Structure

```text
EDGE

ESP32-S3
HX711
BME280
LittleFS
ECDSA

        ↓

INGESTION

Node.js
Express
HTTPS / TLS

        ↓

STORAGE

PostgreSQL
TimescaleDB

        ↓

ANALYTICS

Step Detector
Isolation Forest

        ↓

HUMAN GATE

Beekeeper Confirmation

        ↓

TRACEABILITY

Raw Honey Lot
Processing Batch
Packaging Lot

        ↓

TRUST

SHA-256
Blockchain Anchor

        ↓

CONSUMER

QR
One-Use Credential
Verification
```

The technology stack represented here is consistent with the deck's technical approach. 

---

# 48. Implementation Status

Create a visible internal project matrix.

| Capability             | Status             |
| ---------------------- | ------------------ |
| Landing Page           | DONE               |
| Dashboard              | TODO / IN PROGRESS |
| Hive Telemetry         | TODO / IN PROGRESS |
| Harvest Candidate      | TODO / IN PROGRESS |
| Human Confirmation     | TODO / IN PROGRESS |
| Raw Honey Lot          | TODO / IN PROGRESS |
| Lot Genealogy          | TODO / IN PROGRESS |
| Processing Batch       | P1                 |
| Lab Evidence           | P0                 |
| Blockchain Anchor      | P0                 |
| Consumer Verification  | P0                 |
| Replay Detection       | P0                 |
| FPO Dashboard          | P1                 |
| PWA Install            | P1                 |
| Advanced 3D Validation | P2                 |

Update these according to the real implementation.

---

# 49. Recommended Build Order

## Phase 1 — Core Producer Flow

Build:

1. Dashboard
2. Hive detail
3. Harvest candidate
4. Confirmation
5. Raw Honey Lot

---

## Phase 2 — Traceability

Build:

6. Processing Batch
7. Lot genealogy
8. Packaging Lot

---

## Phase 3 — Trust

Build:

9. Lab evidence
10. SHA-256 verification
11. Blockchain anchor

---

## Phase 4 — Consumer

Build:

12. QR verification
13. One-use credential
14. Replay warning

---

## Phase 5 — Scale

Build:

15. FPO dashboard
16. Evidence export
17. PWA installation

---

## Phase 6 — Polish

Build:

18. Demo Mode
19. Error states
20. Loading states
21. Evidence drawers
22. Responsive pass
23. Final demo reset

---

# 50. Demo Script

## Opening

> "This is the HoneyChain producer dashboard."

## Hive

> "Here we can monitor each connected hive and inspect its telemetry."

## Event

> "A stable weight drop has triggered a harvest candidate."

## Evidence

> "The system shows the underlying telemetry and verification state."

## Human gate

> "The beekeeper reviews the evidence and confirms the harvest."

## Lot

> "Confirmation creates a Raw Honey Lot with its own identity."

## Genealogy

> "That lot remains linked through processing and packaging."

## Lab

> "The laboratory certificate is fingerprinted and linked to the lot."

## Blockchain

> "The trust-critical evidence is anchored for later verification."

## Consumer

> "A consumer can scan the credential and inspect the journey."

## Replay

> "A repeated use of the same credential triggers a replay warning."

This script should map directly onto the UI.

---

# 51. What the Prototype Should Prove

At the end of the demonstration, the evaluator should have evidence for six things.

## 1. IoT

The system can capture hive telemetry.

## 2. Integrity

The system can verify the telemetry/evidence state.

## 3. Intelligence

The system can generate a harvest candidate.

## 4. Human Control

The beekeeper confirms the candidate before lot creation.

## 5. Traceability

The lot remains linked through downstream transformations.

## 6. Verification

A consumer can verify the journey and replay state.

---

# 52. Claims the UI Must NOT Make

Avoid:

> 100% authentic honey

> Guaranteed pure honey

> AI proves purity

> Blockchain prevents adulteration

> Zero export rejection

> Guaranteed FSSAI compliance

> Guaranteed income increase

> 100% counterfeit-proof

The system can provide **evidence and verification mechanisms** without claiming that the technology proves every physical-world property of honey.

---

# 53. Recommended URL Structure

```text
/
    Landing

/demo
    Demo Launcher

/demo/dashboard
    Beekeeper Dashboard

/demo/hives/:hiveId
    Hive Monitoring

/demo/harvest-candidates/:candidateId
    Candidate Review

/demo/lots/create
    Lot Creation

/demo/lots/:lotId
    Lot Detail

/demo/traceability/:lotId
    Genealogy

/demo/batches/:batchId
    Processing Batch

/demo/lots/:lotId/lab
    Laboratory Evidence

/demo/blockchain/:lotId
    Blockchain Anchor

/verify
    Credential Entry

/verify/:credential
    Consumer Verification

/fpo
    FPO Dashboard

/fpo/export
    Evidence Summary

/tech
    Architecture

/tech/status
    System Status
```

---

# 54. Recommended API Flow

Conceptual flow:

```text
GET /api/hives
        ↓
GET /api/hives/H01/telemetry
        ↓
GET /api/harvest-candidates
        ↓
POST /api/harvest-candidates/:id/confirm
        ↓
POST /api/lots
        ↓
GET /api/lots/:id
        ↓
GET /api/lots/:id/genealogy
        ↓
POST /api/lots/:id/lab
        ↓
POST /api/lots/:id/anchor
        ↓
POST /api/credentials/:id/verify
```

These are proposed structures and should be adapted to the actual backend implementation.

---

# 55. Deployment

## Frontend

Deploy the React/Vite application.

## Backend

Deploy the Node.js/Express service.

## Database

Use PostgreSQL + TimescaleDB.

## Object Storage

Use object storage for laboratory PDFs.

## Blockchain

Use the intended test network for demonstration.

## Environment indicator

Display:

```text
ENVIRONMENT: SIH DEMO
NETWORK: Polygon Amoy
DATA MODE: DEMO / SYNTHETIC
```

Clearly distinguish:

* production
* testnet
* demo
* simulated

---

# 56. Observability

Track internally:

* API errors
* telemetry ingestion failures
* signature verification failures
* blockchain transaction failures
* document hash mismatches
* credential replay events

The UI does not need to expose detailed logs.

A lightweight system status page is sufficient.

---

# 57. Reliability

The application should fail gracefully.

## Blockchain unavailable

Allow:

* telemetry review
* candidate review
* lot creation
* evidence preparation

Show:

> **Blockchain Anchor Pending**

## Internet unavailable

Show:

> **Offline — Readings Buffered Locally**

## Lab storage unavailable

Show:

> **Certificate Upload Pending**

## Invalid credential

Show:

> **Credential Not Recognized**

Never allow a subsystem failure to crash the complete interface.

---

# 58. Security Rules

Never place the following inside frontend code:

* private signing keys
* database credentials
* production secrets
* API secret keys

Do not put beekeeper PII on public blockchain records.

Do not use screenshots as a substitute for an actual blockchain transaction in a "live" demo.

---

# 59. Prototype Acceptance Criteria

## Dashboard

* [ ] Opens reliably
* [ ] Demo/live state visible
* [ ] Hives selectable
* [ ] Candidate count visible

## Telemetry

* [ ] Hive identity visible
* [ ] Weight visible
* [ ] Temperature visible
* [ ] Humidity visible
* [ ] Timestamp visible
* [ ] Signature state visible

## Harvest Candidate

* [ ] Candidate state visible
* [ ] Weight delta visible
* [ ] Explanation visible
* [ ] Confirm action works
* [ ] Reject action works

## Lot

* [ ] Lot ID generated
* [ ] Hive linkage preserved
* [ ] Event linkage preserved
* [ ] Quantity visible
* [ ] Lot detail works

## Genealogy

* [ ] Raw lot visible
* [ ] Processing batch visible
* [ ] Packaging lot visible when implemented
* [ ] Consumer credential linked

## Laboratory

* [ ] PDF can be opened
* [ ] SHA-256 displayed
* [ ] Verification state displayed

## Blockchain

* [ ] Network displayed
* [ ] Transaction/anchor displayed
* [ ] Only actual deployed values used

## Consumer

* [ ] Credential input works
* [ ] Valid credential works
* [ ] Journey displayed
* [ ] Reuse triggers warning

## Demo

* [ ] Demo reset works
* [ ] Critical path does not depend on uncontrolled external events

---

# 60. Priority Matrix

| Module                       | Priority   | Reason                        |
| ---------------------------- | ---------- | ----------------------------- |
| Landing Page                 | ✅ Existing | Entry point                   |
| Beekeeper Dashboard          | **P0**     | Main operating interface      |
| Hive Telemetry               | **P0**     | Proves IoT                    |
| Harvest Candidate            | **P0**     | Proves intelligence           |
| Human Confirmation           | **P0**     | Trust boundary                |
| Raw Honey Lot                | **P0**     | Core traceability             |
| Lot Genealogy                | **P0**     | Core product                  |
| Lab Evidence                 | **P0**     | Trust layer                   |
| Blockchain Anchor            | **P0**     | Trust layer                   |
| Consumer Verification        | **P0**     | Completes story               |
| Replay Detection             | **P0**     | Security demonstration        |
| Processing / Mass Accounting | **P1**     | Supports transformation logic |
| FPO Dashboard                | **P1**     | Demonstrates scale            |
| PWA Install                  | **P1**     | Field usability               |
| System Monitoring            | **P2**     | Supporting feature            |
| Native APK                   | **P2**     | Not necessary                 |
| Advanced 3D AI               | **P2**     | Secondary research            |

---

# 61. Golden Path

The most important path in the entire application is:

```text
DASHBOARD
    ↓
HIVE
    ↓
TELEMETRY
    ↓
HARVEST POINT REACHED
    ↓
REVIEW EVIDENCE
    ↓
CONFIRM HARVEST
    ↓
RAW HONEY LOT CREATED
    ↓
LOT GENEALOGY
    ↓
LAB EVIDENCE
    ↓
BLOCKCHAIN ANCHOR
    ↓
CONSUMER CREDENTIAL
    ↓
VERIFIED HONEY JOURNEY
    ↓
SECOND VERIFICATION
    ↓
REPLAY WARNING
```

Everything else is secondary.

---

# 62. Final Product Definition

The prototype should not attempt to prove that HoneyChain has already solved every issue in the Indian honey industry.

It should prove a narrower and technically defensible proposition:

> **HoneyChain creates a continuous evidence trail from hive activity to a traceable honey lot and gives producers, downstream stakeholders, and consumers a way to inspect and verify that journey.**

The most important product object is therefore:

# The Raw Honey Lot + Its Evidence Genealogy

The dashboard is simply the interface through which users create, inspect and verify that evidence.

---

# 63. Final Build Checklist

## P0

* [ ] Landing page
* [ ] Explore Demo CTA
* [ ] Verify CTA
* [ ] Beekeeper dashboard
* [ ] Hive detail
* [ ] Telemetry graph
* [ ] Device evidence
* [ ] Harvest Point Reached
* [ ] Confirm / Reject
* [ ] Raw Honey Lot creation
* [ ] Lot detail
* [ ] Lot genealogy
* [ ] Lab evidence
* [ ] SHA-256 verification
* [ ] Blockchain anchor
* [ ] Consumer verification
* [ ] One-use credential
* [ ] Replay warning
* [ ] Demo Mode
* [ ] Demo reset

## P1

* [ ] Processing batch
* [ ] Mass accounting
* [ ] Packaging lot
* [ ] FPO dashboard
* [ ] Evidence/export summary
* [ ] PWA installation
* [ ] System status

## P2

* [ ] Advanced AI interfaces
* [ ] 3D comb validation
* [ ] Native APK
* [ ] Advanced administration

---

# 64. Final Development Rule

> **When choosing between another feature and making the core flow more convincing, choose proof of the core flow.**

A reliable:

```text
Sensor
→ Harvest Candidate
→ Human Confirmation
→ Raw Honey Lot
→ Lab Evidence
→ Blockchain
→ Consumer Verification
```

flow is more valuable for SIH than a large application containing many loosely connected features.

The submitted deck already gives you the underlying technical story; the software prototype's job is to **make that story executable.** 
