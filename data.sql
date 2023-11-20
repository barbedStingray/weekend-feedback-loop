-- Database should be prime_feedback

-- Please create a new Database called...  swpatrol_report

-- Create Two tables and populate them with the following data


-- starsystems (table 1)
CREATE TABLE "starsystems" (
  "id" serial primary key,
  "system" VARCHAR (30),
  "bases" VARCHAR (250)
); 

-- data
INSERT INTO "starsystems" ("system", "bases")
VALUES 
('Select One...', ''),
('Bespin', 'Cloud City Garrison, Mining Operations, Cloud Outpost, Refinery'),
('Coruscant', 'Cruiser Shipyard, Naval Yards, Inspectorate HQ, Flight Academy, Valley Outpost, Spaceport'),
('Death Star', 'Weapons Post, Command Post, Shipyard Post, Engineering Post'),
('Dagobah', 'Swamp Outpost, Mining Base, Sentry Post'),
('Endor', 'Forest Outpost, Shield Generator, Flight Yard, Refinery'),
('Hoth', 'Relay Base, Collection Facility, Maintenance Facility'),
('Kamino', 'Clone Facilities, Zeta Zero Nine, Communications Outpost, Deep Sea Outpost'),
('Kashyyyk', 'Imperial Base, Forest Outpost, Weapons Research Facility'),
('Mustafar', 'Imperial Base, Garrison Headquarters, Secret Facility'),
('Skariff', 'Military Research Base, Citadel Relay, Training Center'),
('Naboo', 'Imperial Base, Outpost, Weapons Depot, Spaceport'),
('Tatooine', 'Tusken Bunker, Sentry Post, Supply Depot, Spaceport'),
('Yavin', 'Imperial Fortress, Sentry Outpost, Relay Station');


-- patrolreports (table 2)
CREATE TABLE "patrolreports" (
  "id" serial primary key,
  "trooperid" VARCHAR (15),
  "squadron" VARCHAR (25),
  "unitnumber" VARCHAR (10),
  "starsystem" VARCHAR (20),
  "baselocation" VARCHAR (40),
  "weapon" VARCHAR (40),
  "wcondition" VARCHAR (10),
  "acondition" VARCHAR (10),
  "encounters" VARCHAR (150),
  "comments" VARCHAR (300)
  );

  -- data
INSERT INTO "patrolreports" 
  (
  "trooperid",
  "squadron",
  "unitnumber",
  "starsystem",
  "baselocation",
  "weapon",
  "wcondition",
  "acondition",
  "encounters",
  "comments"
  )
  
  VALUES 
  ('BR-1176', 'Jet Trooper', '16', 
  'Dagobah', 'Swamp Outpost', 
  'E-11 Blaster Rifle', '4', '3', 
  'Rebel Scum, Dangerous Wildlife', 
  'routine day here filled with more rebel scum than you could ask for'
  );
