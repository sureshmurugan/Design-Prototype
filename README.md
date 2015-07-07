
URL : http://52.25.235.219/openFDADesign/

Technical Approach: Design Prototype


1.	Introduction
2.	Background Study
3.	Objectives
4.	Data Research & Collection Approach
5.	Design Approach

1.	Introduction

    About Cascades Technologies, inc. (CTi)
      Team CTi Leader, Cascades Technologies, inc. (CTi), is a Capability Maturity Model Integration (CMMI) Level 3 Appraised, Hispanic-Owned Small Disadvantaged Business (SDB) government contractor that provides professional Information Technology (IT) support services and delivers complex end-to-end solutions aligned with the Request for Quotation (RFQ) Performance Work Statement (PWS). 
      In addition, we have familiarity with working alongside other government contractors and Federal employees teammates to accomplish Agile projects in a collaborative environment. This experience comes from developing processes and procedures that stem from best practices on other engagements. Our development teams’ composition includes cross-functional and adaptive developers, database designers, database administrators, QA experts and analysts.

Our approach was to use the data available in the API provided by FDA to create interactive graphical data representations which would potentially unearth useful information which is hidden in the dataset.
We advise the Government on potential long-term enhancements to the design of the GSA OCSIT USA.gov and GobiernoUSA.gov websites as it pertains to accessibility, Search Engine Optimization (SEO), web development training, and general web design best practices. Our current team at GSA also reviews and provides feedback on Search-as-you-type functionality, DigitalGov.gov, Designs from 18F, E-mail forms and chat pages (English and Spanish), Government branches infographic and new designs.

2.	Background Study

      The background study involved analysing the following datasets and explores the wide-range of available data using various API methods and search conditions.
      •	Adverse events data. FDA’s publicly available drug adverse event and medication error reports, and medical device          adverse event reports.
      •	Recalls data. Enforcement report data, containing information gathered from public notices about certain recalls of        FDA-regulated products.
      •	Labeling data. Structured Product Labeling (SPL) data for FDA-regulated human prescription drug, OTC drug and              biological product labeling.

3.	Data Research & Collection Approach

  We made calls to the openFDA API and collected the data relevant to Drugs, Medical Devices and Foods based on the various search conditions. The API returns results in JSON format. Our approach was to convert the resultant JSON data into our desired data format. Currently we re-formatted the JSON data to be used as input for Chart.js API, which we are using to create some sample visualizations.

  We created various types of search conditions and made calls to the dataset and collected the data. Based on the collected data we created our end point dataset to generate the graphs.
Each and every search has one or more endpoints, which serve unique data about various Adverse Events, Labelling and Enforcement Reports for Drugs, Medical Devices and Foods. Every time we created unique queries and called the API to collect data about particular items which could potentially demonstrate a new pattern in the data.


4.	Objectives

    •	To create a dashboard design based on the existing public data in openFDA to create meaningful visualizations. This          would in turn help FDA and other stakeholders to create awareness and improve public health.
    •	To create a user friendly design to access the open data in FDA.

5.	Design Approach

    All stakeholders were involved in a brainstorming session where we discussed the data in detail and zeroed in on the variety of visualizations that we wanted to showcase and the data we wanted to depict. Once we were all in agreement about what we wanted to chart, we came up with the idea of a Dashboard like interface where the user can see the rich variety of visualizations in a Grid like layout. We then provided our designer with a hand drawn image of how we exactly wanted the end result to be. The designer then enhanced our idea, added more details and delivered a neat design template using GIMP. We then converted the design into a Responsive page using a Bootstrap v3.3.4, HTML5, CSS3, javascript and added some sample charts using Chart.js API with the data retrieved from the openFDA API. The team followed agile sprints and went through multiple iterations directly involving the end-users to provide continuous feedback. This ensured that the end product met the user needs per US digital services playbook best practices.

