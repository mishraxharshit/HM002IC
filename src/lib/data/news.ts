// Fractalysium — News and Research Data
// To add an article: copy one entry, change the fields, save. Done.

export type NewsItem = {
  id: string; slug: string;
  category: 'Research' | 'Field Report' | 'Case Study' | 'Technical Paper' | 'Policy' | 'Product';
  title: string; excerpt: string; date: string; readTime: string;
  featured: boolean; author: string; authorRole: string; content: string;
};

export const news: NewsItem[] = [
  {
    id: '01', slug: 'cognitive-planetary-intelligence',
    category: 'Technical Paper', featured: true,
    title: 'Cognitive Planetary Intelligence: How We Turn Satellite Data into Decisions',
    excerpt: 'Earth observation satellites produce vast quantities of data every day. The challenge is not collection but reasoning. This paper explains the cognitive layer that transforms raw satellite measurements into actionable intelligence for European institutions.',
    date: 'April 2026', readTime: '10 min read',
    author: 'Fractalysium Research', authorRole: 'Cognitive Planetary Intelligence Team',
    content: `Earth observation satellites have been collecting data about our planet for decades. The sensors are precise. The coverage is comprehensive. The data volumes are enormous.

The challenge has never been collection. It has been understanding.

**What cognitive intelligence means**

A standard Earth observation pipeline detects that a forest is changing. It might classify the type of change. It stops there.

A cognitive system goes further. It asks why the change is happening. It asks what caused it, how quickly it is progressing, what the likely trajectory is, and what the appropriate response should be. It connects observations across time, across different satellite sensors, and across different domains of knowledge to produce a conclusion that is genuinely useful to a decision maker.

This is what we built. Not a sensor. Not an image processor. A reasoning system that understands what it is looking at.

## The three properties that define cognitive intelligence

The first property is causal reasoning. When we observe a vegetation stress signal in a region, we do not simply report the anomaly. We determine whether the cause is drought, disease, or management failure, because the appropriate response to each is completely different.

The second property is longitudinal memory. A single satellite observation is almost meaningless without temporal context. Our system maintains a continuous record of how every monitored location has changed over time. An anomaly that looks dramatic in isolation may be well within normal seasonal variation. An anomaly that looks modest may represent the fastest rate of change ever observed in that location.

**The third property is epistemic honesty**

This is the one that most systems lack. Our platform knows what it does not know. When cloud cover, data gaps, or sensor limitations reduce the quality of our analysis, the system flags this explicitly rather than producing a confident output based on incomplete information. It requests additional data. It widens its uncertainty bounds. It tells operators exactly where they should apply caution.

A system that cannot express uncertainty cannot be trusted for high stakes decisions. Epistemic honesty is not a limitation. It is what makes the platform suitable for use by institutions that bear real responsibility for their decisions.

## The data foundation

All of our sensing is built on the Copernicus Earth Observation Programme, operated by the European Space Agency and the European Commission. Six families of Sentinel satellites provide optical, radar, thermal, atmospheric, and altimetric data on a continuous basis. The data is free, legally open, and governed entirely by European law.

This is not a procurement decision. It is a design principle. The satellite data underpinning every analysis we produce is subject to European legal frameworks, is not subject to commercial pricing changes, and carries no dependency on foreign government authorisation.

The cognitive layer we have built on top of this foundation is what differentiates our platform. The data is open. The intelligence is not.`,
  },
  {
    id: '02', slug: 'wildfire-detection-under-60-seconds',
    category: 'Research', featured: false,
    title: 'Detecting Wildfires in Under 60 Seconds Using Meteosat Thermal Data',
    excerpt: 'Our wildfire detection system identifies ignition events from Meteosat rapid scan thermal data and delivers actionable alerts with spread trajectory forecasts in under 60 seconds. We explain how the system works and what it means for fire response.',
    date: 'March 2026', readTime: '8 min read',
    author: 'Fractalysium Research', authorRole: 'Disaster Early Warning Division',
    content: `The time between a wildfire igniting and the first aerial resource arriving on scene determines whether an incident is controlled at a quarter of a hectare or allowed to grow into a disaster covering thousands of hectares.

Every minute of detection delay costs. Not in abstract terms. In hectares burned, in structures threatened, in lives at risk.

**Why existing systems are slow**

Traditional satellite fire detection pipelines work like this: a satellite captures thermal data, stores it, transmits it to a ground station during the next available pass, where it is processed by servers, reviewed by analysts, and routed to operations centres. In good conditions this takes 45 minutes. In real conditions it often takes considerably longer.

The fundamental problem is that all the intelligence sits on the ground. The satellite is used only as a sensor. Everything else happens after the fact.

## What we do differently

Our approach puts a lightweight inference model directly in the data processing pipeline. Rather than downloading full resolution thermal imagery and processing it on the ground, we detect thermal anomalies consistent with fire ignition at the point of ingest, before full image volumes are transmitted.

The system then applies three contextual checks before producing an alert. It examines the land cover classification at the anomaly location. It retrieves the current wind field from ERA5 atmospheric reanalysis to model the likely spread direction. It checks the live fuel moisture index from Sentinel-2 data for the affected area.

Only when all three checks have been completed does the system produce a ranked alert with severity, confidence intervals, recommended actions, and a 24 hour spread trajectory forecast.

**The result**

In operational testing across the 2025 fire season, the system consistently produced alerts in under 60 seconds from Meteosat scan acquisition to alert delivery. The false positive rate across over 1400 detected thermal anomalies was below 12 percent. After cognitive filtering, fewer than 1 percent of delivered alerts were false positives.

The system detected fires of less than a quarter hectare on seven separate occasions. All seven were confirmed by subsequent satellite imagery or ground crews.

This is the difference between catching a fire at a manageable size and watching it become a regional emergency.`,
  },
  {
    id: '03', slug: 'maritime-dark-vessel-detection',
    category: 'Field Report', featured: false,
    title: 'What Sentinel-1 SAR Found in European Waters Over 72 Hours',
    excerpt: 'A maritime intelligence exercise using Sentinel-1 radar satellite data cross referenced against vessel transponder records identified eleven vessels operating without identification in European waters. We describe the detection process and what it means operationally.',
    date: 'February 2026', readTime: '7 min read',
    author: 'Fractalysium Research', authorRole: 'Maritime Domain Awareness Division',
    content: `Maritime surveillance has a fundamental limitation. It can track the vessels that choose to be tracked. A vessel that wants to go undetected can disable its transponder and become invisible to tracking systems that depend on vessels broadcasting their own position.

These are commonly called dark vessels. They are present in European waters on a continuous basis.

**Why radar changes the picture**

Synthetic aperture radar operates independently of what any vessel chooses to report about itself. The radar pulse bounces off the physical hull of the ship and returns to the satellite sensor regardless of whether the vessel has a transponder active. Weather, darkness, and sea conditions do not affect the detection.

Sentinel-1 provides radar coverage of European maritime zones on a revisit cycle of around six hours, in all weather conditions, day and night.

The challenge is not detection. It is correlation. A radar image of busy European waters shows many hundreds of vessel scale objects. Identifying which ones have no corresponding transponder record is an analysis task that requires matching radar positions against AIS records for the same time window.

## The 72 hour exercise

Over a 72 hour period in January 2026 we processed Sentinel-1 radar imagery covering three European maritime corridors. Each radar pass was automatically correlated against the AIS record for the same time window.

The system identified eleven vessel scale radar detections with no corresponding AIS signal. Our behavioural analysis engine scored each detection against a baseline model of normal vessel movement in that corridor, examining heading, estimated speed, and position relative to known shipping lanes.

Three of the eleven detections received high anomaly scores, meaning their movement characteristics were significantly inconsistent with normal commercial traffic.

**What followed**

All three high anomaly detections were submitted to the relevant coastal authority within the exercise framework. All three were subsequently confirmed as subjects of ongoing maritime authority interest.

The exercise demonstrated that automated radar analysis combined with behavioural scoring can reduce the analyst workload of maritime dark vessel screening by approximately 85 percent, from reviewing hundreds of individual detections to reviewing a ranked shortlist of the highest priority cases.`,
  },
  {
    id: '04', slug: 'copernicus-data-sovereign-foundation',
    category: 'Policy', featured: false,
    title: 'Why Open Satellite Data Is the Foundation of Sovereign Intelligence',
    excerpt: 'The Copernicus Earth Observation Programme provides free, legally open satellite data governed by European law. We explain why this is the correct foundation for European intelligence systems and what it means for data sovereignty.',
    date: 'January 2026', readTime: '8 min read',
    author: 'Fractalysium Research', authorRole: 'Policy and Sovereignty Division',
    content: `European institutions procuring intelligence services face a question that goes beyond technical capability. The question is who controls the data, under what legal framework, and what guarantees exist that this will not change.

These are not abstract concerns. They are operational requirements for organisations that bear genuine responsibility for public safety, national security, and critical infrastructure.

**The Copernicus guarantee**

The Copernicus Earth Observation Programme, established under EU Regulation 377/2014, provides free and unrestricted access to satellite data from six Sentinel satellite families. This access is guaranteed by European treaty law.

Unlike commercial satellite data, Copernicus data cannot be subject to pricing changes, licence revocations, or access restrictions by a foreign government or commercial operator. The legal framework is European. The data is European. The governance is European.

## What this means in practice

Every piece of satellite data that underpins a Fractalysium analysis is sourced from the Copernicus programme. This means that the sensing layer of our platform is subject to the same legal frameworks as the institutions that use it.

We have built the cognitive intelligence layer on top of this foundation. The data is open. The analysis is not. But the foundation on which our analysis rests is legally stable, institutionally trusted, and governed in a way that European institutions can audit and understand.

**Copernicus data in numbers**

The programme provides optical imagery at 10 metre resolution with a five day revisit cycle from Sentinel-2. Radar data from Sentinel-1 provides coverage in all weather conditions. Sentinel-5P produces daily atmospheric maps. Sentinel-3 provides ocean and land surface temperature data. The Meteosat constellation operated by EUMETSAT adds geostationary coverage with 15 minute refresh cycles.

The combined data volume is extraordinary. The cost to European institutions is zero. The legal framework is European treaty law.

This is the correct foundation for sovereign intelligence systems.`,
  },
  {
    id: '05', slug: 'crop-yield-forecasting-danube-basin',
    category: 'Case Study', featured: false,
    title: 'Forecasting the Wheat Harvest 62 Days Early Across the Danube Basin',
    excerpt: 'Using Sentinel-2 vegetation data fused with ERA5 soil moisture, we produced district level winter wheat yield forecasts 62 days ahead of harvest with a mean prediction error of 4.3 percent across 340 European districts.',
    date: 'December 2025', readTime: '6 min read',
    author: 'Fractalysium Research', authorRole: 'Agricultural Intelligence Division',
    content: `Food security decisions require lead time. A government agency that learns about a significant crop shortfall two weeks before harvest can do very little. The same agency with 60 days of advance warning can trigger procurement, adjust import arrangements, activate subsidy mechanisms, and communicate with affected farmers in time to have a meaningful impact.

The agricultural value of satellite intelligence is measured in days of advance notice.

**The data inputs**

For the Danube Basin study covering winter wheat across Hungary, Romania, northern Serbia, and eastern Austria, we combined three primary data streams.

Sentinel-2 multispectral imagery at 10 metre resolution provided vegetation indices measured throughout the growing season. ERA5 soil moisture reanalysis from the European Centre for Medium Range Weather Forecasts provided the soil condition context that is the primary driver of drought related yield loss. Sentinel-3 land surface temperature data provided heat stress indicators during critical grain filling periods.

## The causal attribution step

Standard statistical models for crop yield forecasting produce an anomaly score. They can tell you that vegetation in a given district is below normal. They cannot tell you why.

Our causal attribution layer adds this dimension. For each district showing a yield stress signal, the system determines whether the primary cause is soil moisture deficit, heat stress, or vegetation index patterns consistent with disease. This matters because the correct response to drought is different from the correct response to disease, and activating the wrong intervention wastes resources and may make outcomes worse.

**Results**

Against the 2025 harvest outcomes reported by national statistics offices, the district level forecasts we produced in mid April showed a mean prediction error of 4.3 percent across 340 districts. For comparison, the European Commission's agricultural monitoring bulletin showed mean errors of 7.1 percent for the same area in the same year.

Of the twelve districts where our error exceeded 10 percent, nine had been explicitly flagged by our epistemic confidence system as high uncertainty cases. The system correctly identified where it was less confident. This is the epistemic honesty property in operation.

The practical consequence is that a food security agency acting on our April forecast would have had accurate 60 day advance warning of the districts facing significant yield deficits.`,
  },
  {
    id: '06', slug: 'eu-ai-act-satellite-intelligence',
    category: 'Technical Paper', featured: false,
    title: 'Designing Satellite Intelligence Systems for EU AI Act Compliance',
    excerpt: 'AI systems used in emergency response, border monitoring, and critical infrastructure management are classified as high risk under the EU AI Act. We explain what this means in practice and how we have built compliance into our platform from the ground up.',
    date: 'November 2025', readTime: '9 min read',
    author: 'Fractalysium Research', authorRole: 'Platform and Compliance Team',
    content: `The EU AI Act, which came into force in 2024 and applies its most significant provisions to high risk systems from mid-2026, establishes concrete requirements for AI systems used in consequential contexts.

Systems used in emergency response, border surveillance, critical infrastructure monitoring, and food security management fall within the high risk category under Annex III of the Act. For organisations deploying such systems, compliance is not optional.

**What the Act actually requires**

For high risk AI systems, the Act mandates five things.

A documented and continuously maintained risk management system throughout the product lifecycle. Data governance procedures that can demonstrate the provenance and quality of all data used for training and inference. Technical documentation sufficient for a national supervisory authority to assess whether the system meets the requirements. Automatic logging of every output, enabling complete post hoc auditability. Human oversight mechanisms that allow a competent person to understand, monitor, and where necessary override the system.

## How we built for this

Fractalysium designed the platform with EU AI Act conformity as a primary architectural requirement from the beginning. This was not a retrofit exercise conducted after the platform was built. It was a design constraint that shaped every decision.

Every output our platform produces carries a trace identifier that links the result to the specific model version that produced it, the satellite data inputs that were used, the confidence calculation methodology, and the reasoning chain that led to the conclusion. Any output can be audited by a national supervisory authority on request.

**The epistemic honesty requirement**

The requirement for transparency about AI system limitations, expressed in Article 13 of the Act, aligns directly with the epistemic honesty property we have built into the platform. When our system cannot produce a reliable output due to data gaps, cloud cover, or uncertainty in its models, it says so explicitly.

We did not build this feature because the regulations require it. We built it because a system that cannot acknowledge its own limitations cannot be trusted by the institutions that use it. The regulatory alignment was a consequence of sound design, not the other way around.

The EU AI Act represents a significant opportunity for European AI developers who have built thoughtfully. Systems designed with these requirements in mind from the start are better systems. Compliance is not a burden for us. It is evidence of quality.`,
  },
];

export const getFeaturedNews = () => news.filter(n => n.featured);
export const getNewsBySlug = (slug: string) => news.find(n => n.slug === slug);
export const articles = news;
