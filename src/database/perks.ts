const perks: IPerk[] = [
  {
      "id": 1,
      "name": "deflect.name",
      "skillId": 1,
      "requiredSkillValue": 25,
      "alternativePerk": "basher",
      "primaryDescription": "deflect.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "deflect.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 2,
      "name": "basher.name",
      "skillId": 1,
      "requiredSkillValue": 25,
      "alternativePerk": "deflect",
      "primaryDescription": "basher.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "basher.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 3,
      "name": "toBeBlunt.name",
      "skillId": 1,
      "requiredSkillValue": 50,
      "alternativePerk": "swiftStrike",
      "primaryDescription": "toBeBlunt.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "toBeBlunt.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 4,
      "name": "swiftStrike.name",
      "skillId": 1,
      "requiredSkillValue": 50,
      "alternativePerk": "toBeBlunt",
      "primaryDescription": "swiftStrike.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "swiftStrike.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 5,
      "name": "cavalry.name",
      "skillId": 1,
      "requiredSkillValue": 75,
      "alternativePerk": "shieldBearer",
      "primaryDescription": "cavalry.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "cavalry.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Cavalry"
      ]
  },
  {
      "id": 6,
      "name": "shieldBearer.name",
      "skillId": 1,
      "requiredSkillValue": 75,
      "alternativePerk": "cavalry",
      "primaryDescription": "shieldBearer.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "shieldBearer.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 7,
      "name": "trainer.name",
      "skillId": 1,
      "requiredSkillValue": 100,
      "alternativePerk": "duelist",
      "primaryDescription": "trainer.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "trainer.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 8,
      "name": "duelist.name",
      "skillId": 1,
      "requiredSkillValue": 100,
      "alternativePerk": "trainer",
      "primaryDescription": "duelist.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "duelist.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 9,
      "name": "shieldWall.name",
      "skillId": 1,
      "requiredSkillValue": 125,
      "alternativePerk": "arrowCatcher",
      "primaryDescription": "shieldWall.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "shieldWall.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "ShieldUser"
      ]
  },
  {
      "id": 10,
      "name": "arrowCatcher.name",
      "skillId": 1,
      "requiredSkillValue": 125,
      "alternativePerk": "shieldWall",
      "primaryDescription": "arrowCatcher.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "arrowCatcher.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "ShieldUser"
      ]
  },
  {
      "id": 11,
      "name": "militaryTradition.name",
      "skillId": 1,
      "requiredSkillValue": 150,
      "alternativePerk": "corpsACorps",
      "primaryDescription": "militaryTradition.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "militaryTradition.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 12,
      "name": "corpsACorps.name",
      "skillId": 1,
      "requiredSkillValue": 150,
      "alternativePerk": "militaryTradition",
      "primaryDescription": "corpsACorps.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "corpsACorps.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 13,
      "name": "standUnited.name",
      "skillId": 1,
      "requiredSkillValue": 175,
      "alternativePerk": "leadByExample",
      "primaryDescription": "standUnited.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "standUnited.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 14,
      "name": "leadByExample.name",
      "skillId": 1,
      "requiredSkillValue": 175,
      "alternativePerk": "standUnited",
      "primaryDescription": "leadByExample.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "leadByExample.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 15,
      "name": "steelCoreShields.name",
      "skillId": 1,
      "requiredSkillValue": 200,
      "alternativePerk": "fleetOfFoot",
      "primaryDescription": "steelCoreShields.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "steelCoreShields.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "ShieldUser",
          "Infantry"
      ]
  },
  {
      "id": 16,
      "name": "fleetOfFoot.name",
      "skillId": 1,
      "requiredSkillValue": 200,
      "alternativePerk": "steelCoreShields",
      "primaryDescription": "fleetOfFoot.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "fleetOfFoot.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 17,
      "name": "deadlyPurpose.name",
      "skillId": 1,
      "requiredSkillValue": 225,
      "alternativePerk": "unwaveringDefense",
      "primaryDescription": "deadlyPurpose.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "deadlyPurpose.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 18,
      "name": "unwaveringDefense.name",
      "skillId": 1,
      "requiredSkillValue": 225,
      "alternativePerk": "deadlyPurpose",
      "primaryDescription": "unwaveringDefense.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "unwaveringDefense.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 19,
      "name": "prestige.name",
      "skillId": 1,
      "requiredSkillValue": 250,
      "alternativePerk": "chinkInTheArmor",
      "primaryDescription": "prestige.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "prestige.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 20,
      "name": "chinkInTheArmor.name",
      "skillId": 1,
      "requiredSkillValue": 250,
      "alternativePerk": "prestige",
      "primaryDescription": "chinkInTheArmor.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "chinkInTheArmor.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 21,
      "name": "wayOfTheSword.name",
      "skillId": 1,
      "requiredSkillValue": 275,
      "alternativePerk": "(PerkObject) null",
      "primaryDescription": "wayOfTheSword.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "wayOfTheSword.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 22,
      "name": "strongGrip.name",
      "skillId": 2,
      "requiredSkillValue": 25,
      "alternativePerk": "woodChopper",
      "primaryDescription": "strongGrip.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "strongGrip.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "TwoHandedUser",
          "Infantry"
      ]
  },
  {
      "id": 23,
      "name": "woodChopper.name",
      "skillId": 2,
      "requiredSkillValue": 25,
      "alternativePerk": "strongGrip",
      "primaryDescription": "woodChopper.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "woodChopper.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 24,
      "name": "onTheEdge.name",
      "skillId": 2,
      "requiredSkillValue": 50,
      "alternativePerk": "headBasher",
      "primaryDescription": "onTheEdge.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "onTheEdge.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 25,
      "name": "headBasher.name",
      "skillId": 2,
      "requiredSkillValue": 50,
      "alternativePerk": "onTheEdge",
      "primaryDescription": "headBasher.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "headBasher.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 26,
      "name": "showOfStrength.name",
      "skillId": 2,
      "requiredSkillValue": 75,
      "alternativePerk": "baptisedInBlood",
      "primaryDescription": "showOfStrength.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "showOfStrength.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 27,
      "name": "baptisedInBlood.name",
      "skillId": 2,
      "requiredSkillValue": 75,
      "alternativePerk": "showOfStrength",
      "primaryDescription": "baptisedInBlood.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "baptisedInBlood.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 28,
      "name": "beastSlayer.name",
      "skillId": 2,
      "requiredSkillValue": 100,
      "alternativePerk": "shieldBreaker",
      "primaryDescription": "beastSlayer.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "beastSlayer.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 29,
      "name": "shieldBreaker.name",
      "skillId": 2,
      "requiredSkillValue": 100,
      "alternativePerk": "beastSlayer",
      "primaryDescription": "shieldBreaker.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "shieldBreaker.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 30,
      "name": "berserker.name",
      "skillId": 2,
      "requiredSkillValue": 125,
      "alternativePerk": "confidence",
      "primaryDescription": "berserker.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "berserker.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 31,
      "name": "confidence.name",
      "skillId": 2,
      "requiredSkillValue": 125,
      "alternativePerk": "berserker",
      "primaryDescription": "confidence.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "confidence.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 32,
      "name": "arrowDeflection.name",
      "skillId": 2,
      "requiredSkillValue": 150,
      "alternativePerk": "(PerkObject) null",
      "primaryDescription": "arrowDeflection.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "arrowDeflection.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 33,
      "name": "terror.name",
      "skillId": 2,
      "requiredSkillValue": 175,
      "alternativePerk": "hope",
      "primaryDescription": "terror.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "terror.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 34,
      "name": "hope.name",
      "skillId": 2,
      "requiredSkillValue": 175,
      "alternativePerk": "terror",
      "primaryDescription": "hope.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "hope.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 35,
      "name": "recklessCharge.name",
      "skillId": 2,
      "requiredSkillValue": 200,
      "alternativePerk": "thickHides",
      "primaryDescription": "recklessCharge.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "recklessCharge.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 36,
      "name": "thickHides.name",
      "skillId": 2,
      "requiredSkillValue": 200,
      "alternativePerk": "recklessCharge",
      "primaryDescription": "thickHides.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "thickHides.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 37,
      "name": "bladeMaster.name",
      "skillId": 2,
      "requiredSkillValue": 225,
      "alternativePerk": "vandal",
      "primaryDescription": "bladeMaster.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "bladeMaster.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 38,
      "name": "vandal.name",
      "skillId": 2,
      "requiredSkillValue": 225,
      "alternativePerk": "bladeMaster",
      "primaryDescription": "vandal.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "vandal.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 39,
      "name": "wayOfTheGreatAxe.name",
      "skillId": 2,
      "requiredSkillValue": 250,
      "alternativePerk": "(PerkObject) null",
      "primaryDescription": "wayOfTheGreatAxe.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "wayOfTheGreatAxe.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 40,
      "name": "pikeman.name",
      "skillId": 3,
      "requiredSkillValue": 25,
      "alternativePerk": "cavalry",
      "primaryDescription": "pikeman.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "pikeman.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 41,
      "name": "cavalry.name",
      "skillId": 3,
      "requiredSkillValue": 25,
      "alternativePerk": "pikeman",
      "primaryDescription": "cavalry.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "cavalry.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Cavalry"
      ]
  },
  {
      "id": 42,
      "name": "braced.name",
      "skillId": 3,
      "requiredSkillValue": 50,
      "alternativePerk": "keepAtBay",
      "primaryDescription": "braced.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "braced.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 43,
      "name": "keepAtBay.name",
      "skillId": 3,
      "requiredSkillValue": 50,
      "alternativePerk": "braced",
      "primaryDescription": "keepAtBay.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "keepAtBay.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 44,
      "name": "swiftSwing.name",
      "skillId": 3,
      "requiredSkillValue": 75,
      "alternativePerk": "cleanThrust",
      "primaryDescription": "swiftSwing.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "swiftSwing.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 45,
      "name": "cleanThrust.name",
      "skillId": 3,
      "requiredSkillValue": 75,
      "alternativePerk": "swiftSwing",
      "primaryDescription": "cleanThrust.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "cleanThrust.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "PoleArmUser",
          "Infantry"
      ]
  },
  {
      "id": 46,
      "name": "footwork.name",
      "skillId": 3,
      "requiredSkillValue": 100,
      "alternativePerk": "hardKnock",
      "primaryDescription": "footwork.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "footwork.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 47,
      "name": "hardKnock.name",
      "skillId": 3,
      "requiredSkillValue": 100,
      "alternativePerk": "footwork",
      "primaryDescription": "hardKnock.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "hardKnock.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 48,
      "name": "steedKiller.name",
      "skillId": 3,
      "requiredSkillValue": 125,
      "alternativePerk": "lancer",
      "primaryDescription": "steedKiller.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "steedKiller.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "PoleArmUser",
          "Infantry"
      ]
  },
  {
      "id": 49,
      "name": "lancer.name",
      "skillId": 3,
      "requiredSkillValue": 125,
      "alternativePerk": "steedKiller",
      "primaryDescription": "lancer.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "lancer.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "PoleArmUser"
      ]
  },
  {
      "id": 50,
      "name": "skewer.name",
      "skillId": 3,
      "requiredSkillValue": 150,
      "alternativePerk": "guards",
      "primaryDescription": "skewer.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "skewer.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 51,
      "name": "guards.name",
      "skillId": 3,
      "requiredSkillValue": 150,
      "alternativePerk": "skewer",
      "primaryDescription": "guards.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "guards.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 52,
      "name": "standardBearer.name",
      "skillId": 3,
      "requiredSkillValue": 175,
      "alternativePerk": "phalanx",
      "primaryDescription": "standardBearer.primaryDescription",
      "primaryRole": "Captain",
      "secondaryDescription": "standardBearer.secondaryDescription",
      "secondaryRole": "Governor",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 53,
      "name": "phalanx.name",
      "skillId": 3,
      "requiredSkillValue": 175,
      "alternativePerk": "standardBearer",
      "primaryDescription": "phalanx.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "phalanx.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "PoleArmUser"
      ]
  },
  {
      "id": 54,
      "name": "generousRations.name",
      "skillId": 3,
      "requiredSkillValue": 200,
      "alternativePerk": "drills",
      "primaryDescription": "generousRations.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "generousRations.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 55,
      "name": "drills.name",
      "skillId": 3,
      "requiredSkillValue": 200,
      "alternativePerk": "generousRations",
      "primaryDescription": "drills.primaryDescription",
      "primaryRole": "Governor",
      "secondaryDescription": "drills.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 56,
      "name": "sureFooted.name",
      "skillId": 3,
      "requiredSkillValue": 225,
      "alternativePerk": "unstoppableForce",
      "primaryDescription": "sureFooted.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "sureFooted.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 57,
      "name": "unstoppableForce.name",
      "skillId": 3,
      "requiredSkillValue": 225,
      "alternativePerk": "sureFooted",
      "primaryDescription": "unstoppableForce.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "unstoppableForce.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "PoleArmUser",
          "Cavalry"
      ]
  },
  {
      "id": 58,
      "name": "counterweight.name",
      "skillId": 3,
      "requiredSkillValue": 250,
      "alternativePerk": "sharpenTheTip",
      "primaryDescription": "counterweight.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "counterweight.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "PoleArmUser",
          "Infantry"
      ]
  },
  {
      "id": 59,
      "name": "sharpenTheTip.name",
      "skillId": 3,
      "requiredSkillValue": 250,
      "alternativePerk": "counterweight",
      "primaryDescription": "sharpenTheTip.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "sharpenTheTip.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 60,
      "name": "wayOfTheSpear.name",
      "skillId": 3,
      "requiredSkillValue": 275,
      "alternativePerk": "(PerkObject) null",
      "primaryDescription": "wayOfTheSpear.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "wayOfTheSpear.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 61,
      "name": "bowControl.name",
      "skillId": 4,
      "requiredSkillValue": 25,
      "alternativePerk": "deadAim",
      "primaryDescription": "bowControl.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "bowControl.secondaryDescription",
      "secondaryRole": "Captain"
  },
  {
      "id": 62,
      "name": "deadAim.name",
      "skillId": 4,
      "requiredSkillValue": 25,
      "alternativePerk": "bowControl",
      "primaryDescription": "deadAim.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "deadAim.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "BowUser"
      ]
  },
  {
      "id": 63,
      "name": "bodkin.name",
      "skillId": 4,
      "requiredSkillValue": 50,
      "alternativePerk": "rangersSwiftness",
      "primaryDescription": "bodkin.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "bodkin.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "BowUser"
      ]
  },
  {
      "id": 64,
      "name": "rangersSwiftness.name",
      "skillId": 4,
      "requiredSkillValue": 50,
      "alternativePerk": "bodkin",
      "primaryDescription": "rangersSwiftness.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "rangersSwiftness.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "BowUser"
      ]
  },
  {
      "id": 65,
      "name": "rapidFire.name",
      "skillId": 4,
      "requiredSkillValue": 75,
      "alternativePerk": "quickAdjustments",
      "primaryDescription": "rapidFire.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "rapidFire.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "BowUser"
      ]
  },
  {
      "id": 66,
      "name": "quickAdjustments.name",
      "skillId": 4,
      "requiredSkillValue": 75,
      "alternativePerk": "rapidFire",
      "primaryDescription": "quickAdjustments.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "quickAdjustments.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "BowUser"
      ]
  },
  {
      "id": 67,
      "name": "merryMen.name",
      "skillId": 4,
      "requiredSkillValue": 100,
      "alternativePerk": "mountedArchery",
      "primaryDescription": "merryMen.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "merryMen.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 68,
      "name": "mountedArchery.name",
      "skillId": 4,
      "requiredSkillValue": 100,
      "alternativePerk": "merryMen",
      "primaryDescription": "mountedArchery.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "mountedArchery.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 69,
      "name": "trainer.name",
      "skillId": 4,
      "requiredSkillValue": 125,
      "alternativePerk": "strongBows",
      "primaryDescription": "trainer.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "trainer.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 70,
      "name": "strongBows.name",
      "skillId": 4,
      "requiredSkillValue": 125,
      "alternativePerk": "trainer",
      "primaryDescription": "strongBows.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "strongBows.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "BowUser"
      ]
  },
  {
      "id": 71,
      "name": "discipline.name",
      "skillId": 4,
      "requiredSkillValue": 150,
      "alternativePerk": "hunterClan",
      "primaryDescription": "discipline.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "discipline.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 72,
      "name": "hunterClan.name",
      "skillId": 4,
      "requiredSkillValue": 150,
      "alternativePerk": "discipline",
      "primaryDescription": "hunterClan.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "hunterClan.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 73,
      "name": "skirmishPhaseMaster.name",
      "skillId": 4,
      "requiredSkillValue": 175,
      "alternativePerk": "eagleEye",
      "primaryDescription": "skirmishPhaseMaster.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "skirmishPhaseMaster.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "BowUser"
      ]
  },
  {
      "id": 74,
      "name": "eagleEye.name",
      "skillId": 4,
      "requiredSkillValue": 175,
      "alternativePerk": "skirmishPhaseMaster",
      "primaryDescription": "eagleEye.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "eagleEye.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 75,
      "name": "bullsEye.name",
      "skillId": 4,
      "requiredSkillValue": 200,
      "alternativePerk": "renownedArcher",
      "primaryDescription": "bullsEye.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "bullsEye.secondaryDescription",
      "secondaryRole": "Governor",
      "troopClasses": [
          "Ranged"
      ]
  },
  {
      "id": 76,
      "name": "renownedArcher.name",
      "skillId": 4,
      "requiredSkillValue": 200,
      "alternativePerk": "bullsEye",
      "primaryDescription": "renownedArcher.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "renownedArcher.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 77,
      "name": "horseMaster.name",
      "skillId": 4,
      "requiredSkillValue": 225,
      "alternativePerk": "deepQuivers",
      "primaryDescription": "horseMaster.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "horseMaster.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "BowUser",
          "Cavalry"
      ]
  },
  {
      "id": 78,
      "name": "deepQuivers.name",
      "skillId": 4,
      "requiredSkillValue": 225,
      "alternativePerk": "horseMaster",
      "primaryDescription": "deepQuivers.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "deepQuivers.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 79,
      "name": "quickDraw.name",
      "skillId": 4,
      "requiredSkillValue": 250,
      "alternativePerk": "salvo",
      "primaryDescription": "quickDraw.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "quickDraw.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 80,
      "name": "salvo.name",
      "skillId": 4,
      "requiredSkillValue": 250,
      "alternativePerk": "quickDraw",
      "primaryDescription": "salvo.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "salvo.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 81,
      "name": "deadshot.name",
      "skillId": 4,
      "requiredSkillValue": 275,
      "alternativePerk": "(PerkObject) null",
      "primaryDescription": "deadshot.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "deadshot.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 82,
      "name": "piercer.name",
      "skillId": 5,
      "requiredSkillValue": 25,
      "alternativePerk": "marksmen",
      "primaryDescription": "piercer.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "piercer.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 83,
      "name": "marksmen.name",
      "skillId": 5,
      "requiredSkillValue": 25,
      "alternativePerk": "piercer",
      "primaryDescription": "marksmen.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "marksmen.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 84,
      "name": "unhorser.name",
      "skillId": 5,
      "requiredSkillValue": 50,
      "alternativePerk": "windWinder",
      "primaryDescription": "unhorser.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "unhorser.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "CrossbowUser"
      ]
  },
  {
      "id": 85,
      "name": "windWinder.name",
      "skillId": 5,
      "requiredSkillValue": 50,
      "alternativePerk": "unhorser",
      "primaryDescription": "windWinder.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "windWinder.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "CrossbowUser"
      ]
  },
  {
      "id": 86,
      "name": "donkeysSwiftness.name",
      "skillId": 5,
      "requiredSkillValue": 75,
      "alternativePerk": "sheriff",
      "primaryDescription": "donkeysSwiftness.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "donkeysSwiftness.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "CrossbowUser"
      ]
  },
  {
      "id": 87,
      "name": "sheriff.name",
      "skillId": 5,
      "requiredSkillValue": 75,
      "alternativePerk": "donkeysSwiftness",
      "primaryDescription": "sheriff.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "sheriff.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 88,
      "name": "peasantLeader.name",
      "skillId": 5,
      "requiredSkillValue": 100,
      "alternativePerk": "renownMarksmen",
      "primaryDescription": "peasantLeader.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "peasantLeader.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 89,
      "name": "renownMarksmen.name",
      "skillId": 5,
      "requiredSkillValue": 100,
      "alternativePerk": "peasantLeader",
      "primaryDescription": "renownMarksmen.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "renownMarksmen.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 90,
      "name": "fletcher.name",
      "skillId": 5,
      "requiredSkillValue": 125,
      "alternativePerk": "puncture",
      "primaryDescription": "fletcher.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "fletcher.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 91,
      "name": "puncture.name",
      "skillId": 5,
      "requiredSkillValue": 125,
      "alternativePerk": "fletcher",
      "primaryDescription": "puncture.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "puncture.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "CrossbowUser"
      ]
  },
  {
      "id": 92,
      "name": "looseAndMove.name",
      "skillId": 5,
      "requiredSkillValue": 150,
      "alternativePerk": "deftHands",
      "primaryDescription": "looseAndMove.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "looseAndMove.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Ranged"
      ]
  },
  {
      "id": 93,
      "name": "deftHands.name",
      "skillId": 5,
      "requiredSkillValue": 150,
      "alternativePerk": "looseAndMove",
      "primaryDescription": "deftHands.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "deftHands.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "CrossbowUser"
      ]
  },
  {
      "id": 94,
      "name": "counterFire.name",
      "skillId": 5,
      "requiredSkillValue": 175,
      "alternativePerk": "mountedCrossbowman",
      "primaryDescription": "counterFire.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "counterFire.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "CrossbowUser"
      ]
  },
  {
      "id": 95,
      "name": "mountedCrossbowman.name",
      "skillId": 5,
      "requiredSkillValue": 175,
      "alternativePerk": "counterFire",
      "primaryDescription": "mountedCrossbowman.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "mountedCrossbowman.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 96,
      "name": "steady.name",
      "skillId": 5,
      "requiredSkillValue": 200,
      "alternativePerk": "sniper",
      "primaryDescription": "steady.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "steady.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 97,
      "name": "sniper.name",
      "skillId": 5,
      "requiredSkillValue": 200,
      "alternativePerk": "steady",
      "primaryDescription": "sniper.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "sniper.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 98,
      "name": "hammerBolts.name",
      "skillId": 5,
      "requiredSkillValue": 225,
      "alternativePerk": "pavise",
      "primaryDescription": "hammerBolts.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "hammerBolts.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "CrossbowUser"
      ]
  },
  {
      "id": 99,
      "name": "pavise.name",
      "skillId": 5,
      "requiredSkillValue": 225,
      "alternativePerk": "hammerBolts",
      "primaryDescription": "pavise.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "pavise.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 100,
      "name": "terror.name",
      "skillId": 5,
      "requiredSkillValue": 250,
      "alternativePerk": "pickedShots",
      "primaryDescription": "terror.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "terror.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "CrossbowUser"
      ]
  },
  {
      "id": 101,
      "name": "pickedShots.name",
      "skillId": 5,
      "requiredSkillValue": 250,
      "alternativePerk": "terror",
      "primaryDescription": "pickedShots.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "pickedShots.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 102,
      "name": "mightyPull.name",
      "skillId": 5,
      "requiredSkillValue": 275,
      "alternativePerk": "(PerkObject) null",
      "primaryDescription": "mightyPull.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "mightyPull.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 103,
      "name": "quickDraw.name",
      "skillId": 6,
      "requiredSkillValue": 25,
      "alternativePerk": "shieldBreaker",
      "primaryDescription": "quickDraw.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "quickDraw.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "ThrownUser"
      ]
  },
  {
      "id": 104,
      "name": "shieldBreaker.name",
      "skillId": 6,
      "requiredSkillValue": 25,
      "alternativePerk": "quickDraw",
      "primaryDescription": "shieldBreaker.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "shieldBreaker.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "ThrownUser"
      ]
  },
  {
      "id": 105,
      "name": "hunter.name",
      "skillId": 6,
      "requiredSkillValue": 50,
      "alternativePerk": "flexibleFighter",
      "primaryDescription": "hunter.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "hunter.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "ThrownUser"
      ]
  },
  {
      "id": 106,
      "name": "flexibleFighter.name",
      "skillId": 6,
      "requiredSkillValue": 50,
      "alternativePerk": "hunter",
      "primaryDescription": "flexibleFighter.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "flexibleFighter.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 107,
      "name": "mountedSkirmisher.name",
      "skillId": 6,
      "requiredSkillValue": 75,
      "alternativePerk": "wellPrepared",
      "primaryDescription": "mountedSkirmisher.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "mountedSkirmisher.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "ThrownUser",
          "Cavalry"
      ]
  },
  {
      "id": 108,
      "name": "wellPrepared.name",
      "skillId": 6,
      "requiredSkillValue": 75,
      "alternativePerk": "mountedSkirmisher",
      "primaryDescription": "wellPrepared.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "wellPrepared.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 109,
      "name": "runningThrow.name",
      "skillId": 6,
      "requiredSkillValue": 100,
      "alternativePerk": "knockOff",
      "primaryDescription": "runningThrow.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "runningThrow.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "ThrownUser"
      ]
  },
  {
      "id": 110,
      "name": "knockOff.name",
      "skillId": 6,
      "requiredSkillValue": 100,
      "alternativePerk": "runningThrow",
      "primaryDescription": "knockOff.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "knockOff.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "ThrownUser"
      ]
  },
  {
      "id": 111,
      "name": "skirmisher.name",
      "skillId": 6,
      "requiredSkillValue": 125,
      "alternativePerk": "saddlebags",
      "primaryDescription": "skirmisher.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "skirmisher.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 112,
      "name": "saddlebags.name",
      "skillId": 6,
      "requiredSkillValue": 125,
      "alternativePerk": "skirmisher",
      "primaryDescription": "saddlebags.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "saddlebags.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 113,
      "name": "focus.name",
      "skillId": 6,
      "requiredSkillValue": 150,
      "alternativePerk": "lastHit",
      "primaryDescription": "focus.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "focus.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 114,
      "name": "lastHit.name",
      "skillId": 6,
      "requiredSkillValue": 150,
      "alternativePerk": "focus",
      "primaryDescription": "lastHit.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "lastHit.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 115,
      "name": "headHunter.name",
      "skillId": 6,
      "requiredSkillValue": 175,
      "alternativePerk": "throwingCompetitions",
      "primaryDescription": "headHunter.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "headHunter.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 116,
      "name": "throwingCompetitions.name",
      "skillId": 6,
      "requiredSkillValue": 175,
      "alternativePerk": "headHunter",
      "primaryDescription": "throwingCompetitions.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "throwingCompetitions.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 117,
      "name": "resourceful.name",
      "skillId": 6,
      "requiredSkillValue": 200,
      "alternativePerk": "splinters",
      "primaryDescription": "resourceful.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "resourceful.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 118,
      "name": "splinters.name",
      "skillId": 6,
      "requiredSkillValue": 200,
      "alternativePerk": "resourceful",
      "primaryDescription": "splinters.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "splinters.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "ThrownUser"
      ]
  },
  {
      "id": 119,
      "name": "perfectTechnique.name",
      "skillId": 6,
      "requiredSkillValue": 225,
      "alternativePerk": "longReach",
      "primaryDescription": "perfectTechnique.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "perfectTechnique.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Ranged"
      ]
  },
  {
      "id": 120,
      "name": "longReach.name",
      "skillId": 6,
      "requiredSkillValue": 225,
      "alternativePerk": "perfectTechnique",
      "primaryDescription": "longReach.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "longReach.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 121,
      "name": "weakSpot.name",
      "skillId": 6,
      "requiredSkillValue": 250,
      "alternativePerk": "impale",
      "primaryDescription": "weakSpot.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "weakSpot.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "ThrownUser"
      ]
  },
  {
      "id": 122,
      "name": "impale.name",
      "skillId": 6,
      "requiredSkillValue": 250,
      "alternativePerk": "weakSpot",
      "primaryDescription": "impale.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "impale.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "ThrownUser",
          "Infantry"
      ]
  },
  {
      "id": 123,
      "name": "unstoppableForce.name",
      "skillId": 6,
      "requiredSkillValue": 275,
      "alternativePerk": "(PerkObject) null",
      "primaryDescription": "unstoppableForce.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "unstoppableForce.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 124,
      "name": "fullSpeed.name",
      "skillId": 7,
      "requiredSkillValue": 25,
      "alternativePerk": "nimbleSteed",
      "primaryDescription": "fullSpeed.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "fullSpeed.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Cavalry"
      ]
  },
  {
      "id": 125,
      "name": "nimbleSteed.name",
      "skillId": 7,
      "requiredSkillValue": 25,
      "alternativePerk": "fullSpeed",
      "primaryDescription": "nimbleSteed.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "nimbleSteed.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Cavalry"
      ]
  },
  {
      "id": 126,
      "name": "wellStraped.name",
      "skillId": 7,
      "requiredSkillValue": 50,
      "alternativePerk": "veterinary",
      "primaryDescription": "wellStraped.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "wellStraped.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 127,
      "name": "veterinary.name",
      "skillId": 7,
      "requiredSkillValue": 50,
      "alternativePerk": "wellStraped",
      "primaryDescription": "veterinary.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "veterinary.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 128,
      "name": "nomadicTraditions.name",
      "skillId": 7,
      "requiredSkillValue": 75,
      "alternativePerk": "filledToBrim",
      "primaryDescription": "nomadicTraditions.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "nomadicTraditions.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Cavalry"
      ]
  },
  {
      "id": 129,
      "name": "filledToBrim.name",
      "skillId": 7,
      "requiredSkillValue": 75,
      "alternativePerk": "nomadicTraditions",
      "primaryDescription": "filledToBrim.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "filledToBrim.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 130,
      "name": "sagittarius.name",
      "skillId": 7,
      "requiredSkillValue": 100,
      "alternativePerk": "sweepingWind",
      "primaryDescription": "sagittarius.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "sagittarius.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Cavalry",
          "Ranged"
      ]
  },
  {
      "id": 131,
      "name": "sweepingWind.name",
      "skillId": 7,
      "requiredSkillValue": 100,
      "alternativePerk": "sagittarius",
      "primaryDescription": "sweepingWind.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "sweepingWind.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 132,
      "name": "reliefForce.name",
      "skillId": 7,
      "requiredSkillValue": 125,
      "alternativePerk": "(PerkObject) null",
      "primaryDescription": "reliefForce.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "reliefForce.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 133,
      "name": "mountedWarrior.name",
      "skillId": 7,
      "requiredSkillValue": 150,
      "alternativePerk": "horseArcher",
      "primaryDescription": "mountedWarrior.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "mountedWarrior.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Cavalry"
      ]
  },
  {
      "id": 134,
      "name": "horseArcher.name",
      "skillId": 7,
      "requiredSkillValue": 150,
      "alternativePerk": "mountedWarrior",
      "primaryDescription": "horseArcher.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "horseArcher.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "BowUser",
          "Cavalry",
          "Ranged"
      ]
  },
  {
      "id": 135,
      "name": "horde.name",
      "skillId": 7,
      "requiredSkillValue": 175,
      "alternativePerk": "breeder",
      "primaryDescription": "horde.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "horde.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 136,
      "name": "breeder.name",
      "skillId": 7,
      "requiredSkillValue": 175,
      "alternativePerk": "horde",
      "primaryDescription": "breeder.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "breeder.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 137,
      "name": "thunderousCharge.name",
      "skillId": 7,
      "requiredSkillValue": 200,
      "alternativePerk": "annoyingBuzz",
      "primaryDescription": "thunderousCharge.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "thunderousCharge.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Cavalry"
      ]
  },
  {
      "id": 138,
      "name": "annoyingBuzz.name",
      "skillId": 7,
      "requiredSkillValue": 200,
      "alternativePerk": "thunderousCharge",
      "primaryDescription": "annoyingBuzz.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "annoyingBuzz.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Cavalry",
          "Ranged"
      ]
  },
  {
      "id": 139,
      "name": "mountedPatrols.name",
      "skillId": 7,
      "requiredSkillValue": 225,
      "alternativePerk": "cavalryTactics",
      "primaryDescription": "mountedPatrols.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "mountedPatrols.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 140,
      "name": "cavalryTactics.name",
      "skillId": 7,
      "requiredSkillValue": 225,
      "alternativePerk": "mountedPatrols",
      "primaryDescription": "cavalryTactics.primaryDescription",
      "primaryRole": "ClanLeader",
      "secondaryDescription": "cavalryTactics.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 141,
      "name": "dauntlessSteed.name",
      "skillId": 7,
      "requiredSkillValue": 250,
      "alternativePerk": "toughSteed",
      "primaryDescription": "dauntlessSteed.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "dauntlessSteed.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Cavalry"
      ]
  },
  {
      "id": 142,
      "name": "toughSteed.name",
      "skillId": 7,
      "requiredSkillValue": 250,
      "alternativePerk": "dauntlessSteed",
      "primaryDescription": "toughSteed.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "toughSteed.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Cavalry"
      ]
  },
  {
      "id": 143,
      "name": "theWayOfTheSaddle.name",
      "skillId": 7,
      "requiredSkillValue": 275,
      "alternativePerk": "(PerkObject) null",
      "primaryDescription": "theWayOfTheSaddle.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "",
      "secondaryRole": "Personal"
  },
  {
      "id": 144,
      "name": "morningExercise.name",
      "skillId": 8,
      "requiredSkillValue": 25,
      "alternativePerk": "wellBuilt",
      "primaryDescription": "morningExercise.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "morningExercise.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 145,
      "name": "wellBuilt.name",
      "skillId": 8,
      "requiredSkillValue": 25,
      "alternativePerk": "morningExercise",
      "primaryDescription": "wellBuilt.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "wellBuilt.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 146,
      "name": "fury.name",
      "skillId": 8,
      "requiredSkillValue": 50,
      "alternativePerk": "formFittingArmor",
      "primaryDescription": "fury.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "fury.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 147,
      "name": "formFittingArmor.name",
      "skillId": 8,
      "requiredSkillValue": 50,
      "alternativePerk": "fury",
      "primaryDescription": "formFittingArmor.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "formFittingArmor.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 148,
      "name": "havingGoing.name",
      "skillId": 8,
      "requiredSkillValue": 75,
      "alternativePerk": "stamina",
      "primaryDescription": "havingGoing.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "havingGoing.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 149,
      "name": "stamina.name",
      "skillId": 8,
      "requiredSkillValue": 75,
      "alternativePerk": "havingGoing",
      "primaryDescription": "stamina.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "stamina.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 150,
      "name": "sprint.name",
      "skillId": 8,
      "requiredSkillValue": 100,
      "alternativePerk": "powerful",
      "primaryDescription": "sprint.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "sprint.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 151,
      "name": "powerful.name",
      "skillId": 8,
      "requiredSkillValue": 100,
      "alternativePerk": "sprint",
      "primaryDescription": "powerful.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "powerful.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 152,
      "name": "surgingBlow.name",
      "skillId": 8,
      "requiredSkillValue": 125,
      "alternativePerk": "braced",
      "primaryDescription": "surgingBlow.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "surgingBlow.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 153,
      "name": "braced.name",
      "skillId": 8,
      "requiredSkillValue": 125,
      "alternativePerk": "surgingBlow",
      "primaryDescription": "braced.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "braced.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 154,
      "name": "walkItOff.name",
      "skillId": 8,
      "requiredSkillValue": 150,
      "alternativePerk": "aGoodDaysRest",
      "primaryDescription": "walkItOff.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "walkItOff.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 155,
      "name": "aGoodDaysRest.name",
      "skillId": 8,
      "requiredSkillValue": 150,
      "alternativePerk": "walkItOff",
      "primaryDescription": "aGoodDaysRest.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "aGoodDaysRest.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 156,
      "name": "healthyCitizens.name",
      "skillId": 8,
      "requiredSkillValue": 175,
      "alternativePerk": "energetic",
      "primaryDescription": "healthyCitizens.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "healthyCitizens.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 157,
      "name": "energetic.name",
      "skillId": 8,
      "requiredSkillValue": 175,
      "alternativePerk": "healthyCitizens",
      "primaryDescription": "energetic.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "energetic.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 158,
      "name": "steady.name",
      "skillId": 8,
      "requiredSkillValue": 200,
      "alternativePerk": "strong",
      "primaryDescription": "steady.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "steady.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 159,
      "name": "strong.name",
      "skillId": 8,
      "requiredSkillValue": 200,
      "alternativePerk": "steady",
      "primaryDescription": "strong.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "strong.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 160,
      "name": "strongLegs.name",
      "skillId": 8,
      "requiredSkillValue": 225,
      "alternativePerk": "strongArms",
      "primaryDescription": "strongLegs.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "strongLegs.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 161,
      "name": "strongArms.name",
      "skillId": 8,
      "requiredSkillValue": 225,
      "alternativePerk": "strongLegs",
      "primaryDescription": "strongArms.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "strongArms.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "ThrownUser"
      ]
  },
  {
      "id": 162,
      "name": "spartan.name",
      "skillId": 8,
      "requiredSkillValue": 250,
      "alternativePerk": "ignorePain",
      "primaryDescription": "spartan.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "spartan.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 163,
      "name": "ignorePain.name",
      "skillId": 8,
      "requiredSkillValue": 250,
      "alternativePerk": "spartan",
      "primaryDescription": "ignorePain.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "ignorePain.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "Infantry"
      ]
  },
  {
      "id": 164,
      "name": "mightyBlow.name",
      "skillId": 8,
      "requiredSkillValue": 275,
      "alternativePerk": "(PerkObject) null",
      "primaryDescription": "mightyBlow.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "mightyBlow.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 165,
      "name": "ironMaker.name",
      "primaryDescription": "ironMaker.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 25,
      "alternativePerk": "CharcoalMaker"
  },
  {
      "id": 166,
      "name": "charcoalMaker.name",
      "primaryDescription": "charcoalMaker.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 25,
      "alternativePerk": "IronMaker"
  },
  {
      "id": 167,
      "name": "steelMaker.name",
      "primaryDescription": "steelMaker.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 50,
      "alternativePerk": "CuriousSmelter"
  },
  {
      "id": 168,
      "name": "curiousSmelter.name",
      "primaryDescription": "curiousSmelter.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 50,
      "alternativePerk": "SteelMaker",
      "primaryRole": "Personal"
  },
  {
      "id": 169,
      "name": "steelMaker2.name",
      "primaryDescription": "steelMaker2.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 75,
      "alternativePerk": "CuriousSmith"
  },
  {
      "id": 170,
      "name": "curiousSmith.name",
      "primaryDescription": "curiousSmith.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 75,
      "alternativePerk": "SteelMaker2",
      "primaryRole": "Personal"
  },
  {
      "id": 171,
      "name": "experiencedSmith.name",
      "primaryDescription": "experiencedSmith.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 100,
      "alternativePerk": "SteelMaker3",
      "primaryRole": "Personal"
  },
  {
      "id": 172,
      "name": "steelMaker3.name",
      "primaryDescription": "steelMaker3.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 100,
      "alternativePerk": "ExperiencedSmith"
  },
  {
      "id": 173,
      "name": "practicalRefiner.name",
      "primaryDescription": "practicalRefiner.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 125,
      "alternativePerk": "PracticalSmelter",
      "primaryRole": "Personal"
  },
  {
      "id": 174,
      "name": "practicalSmelter.name",
      "primaryDescription": "practicalSmelter.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 125,
      "alternativePerk": "PracticalRefiner",
      "primaryRole": "Personal"
  },
  {
      "id": 175,
      "name": "vigorousSmith.name",
      "primaryDescription": "vigorousSmith.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 150,
      "alternativePerk": "StrongSmith",
      "primaryRole": "Personal"
  },
  {
      "id": 176,
      "name": "strongSmith.name",
      "primaryDescription": "strongSmith.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 150,
      "alternativePerk": "VigorousSmith",
      "primaryRole": "Personal"
  },
  {
      "id": 177,
      "name": "practicalSmith.name",
      "primaryDescription": "practicalSmith.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 175,
      "alternativePerk": "ArtisanSmith",
      "primaryRole": "Personal"
  },
  {
      "id": 178,
      "name": "artisanSmith.name",
      "primaryDescription": "artisanSmith.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 175,
      "alternativePerk": "PracticalSmith",
      "primaryRole": "Personal"
  },
  {
      "id": 179,
      "name": "masterSmith.name",
      "primaryDescription": "masterSmith.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 200,
      "primaryRole": "Personal"
  },
  {
      "id": 180,
      "name": "fencerSmith.name",
      "primaryDescription": "fencerSmith.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 225,
      "alternativePerk": "EnduringSmith",
      "primaryRole": "Personal"
  },
  {
      "id": 181,
      "name": "enduringSmith.name",
      "primaryDescription": "enduringSmith.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 225,
      "alternativePerk": "FencerSmith",
      "primaryRole": "Personal"
  },
  {
      "id": 182,
      "name": "sharpenedEdge.name",
      "primaryDescription": "sharpenedEdge.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 250,
      "alternativePerk": "SharpenedTip",
      "primaryRole": "Personal"
  },
  {
      "id": 183,
      "name": "sharpenedTip.name",
      "primaryDescription": "sharpenedTip.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 250,
      "alternativePerk": "SharpenedEdge",
      "primaryRole": "Personal"
  },
  {
      "id": 184,
      "name": "legendarySmith.name",
      "primaryDescription": "legendarySmith.primaryDescription",
      "skillId": 9,
      "requiredSkillValue": 275,
      "primaryRole": "Personal"
  },
  {
      "id": 185,
      "name": "tightFormations.name",
      "skillId": 11,
      "requiredSkillValue": 25,
      "alternativePerk": "looseFormations",
      "primaryDescription": "tightFormations.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "tightFormations.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 186,
      "name": "looseFormations.name",
      "skillId": 11,
      "requiredSkillValue": 25,
      "alternativePerk": "tightFormations",
      "primaryDescription": "looseFormations.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "looseFormations.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 187,
      "name": "asymmetricalWarfare.name",
      "skillId": 11,
      "requiredSkillValue": 50,
      "alternativePerk": "properEngagement",
      "primaryDescription": "asymmetricalWarfare.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "asymmetricalWarfare.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 188,
      "name": "properEngagement.name",
      "skillId": 11,
      "requiredSkillValue": 50,
      "alternativePerk": "asymmetricalWarfare",
      "primaryDescription": "properEngagement.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "properEngagement.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 189,
      "name": "smallUnitTactics.name",
      "skillId": 11,
      "requiredSkillValue": 75,
      "alternativePerk": "hordeLeader",
      "primaryDescription": "smallUnitTactics.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "smallUnitTactics.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 190,
      "name": "hordeLeader.name",
      "skillId": 11,
      "requiredSkillValue": 75,
      "alternativePerk": "smallUnitTactics",
      "primaryDescription": "hordeLeader.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "hordeLeader.secondaryDescription",
      "secondaryRole": "ArmyCommander"
  },
  {
      "id": 191,
      "name": "lawKeeper.name",
      "skillId": 11,
      "requiredSkillValue": 100,
      "alternativePerk": "coaching",
      "primaryDescription": "lawKeeper.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "lawKeeper.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 192,
      "name": "coaching.name",
      "skillId": 11,
      "requiredSkillValue": 100,
      "alternativePerk": "lawKeeper",
      "primaryDescription": "coaching.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "coaching.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 193,
      "name": "swiftRegroup.name",
      "skillId": 11,
      "requiredSkillValue": 125,
      "alternativePerk": "improviser",
      "primaryDescription": "swiftRegroup.primaryDescription",
      "primaryRole": "PartyMember",
      "secondaryDescription": "swiftRegroup.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 194,
      "name": "improviser.name",
      "skillId": 11,
      "requiredSkillValue": 125,
      "alternativePerk": "swiftRegroup",
      "primaryDescription": "improviser.primaryDescription",
      "primaryRole": "PartyMember",
      "secondaryDescription": "improviser.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 195,
      "name": "onTheMarch.name",
      "skillId": 11,
      "requiredSkillValue": 150,
      "alternativePerk": "callToArms",
      "primaryDescription": "onTheMarch.primaryDescription",
      "primaryRole": "ArmyCommander",
      "secondaryDescription": "onTheMarch.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 196,
      "name": "callToArms.name",
      "skillId": 11,
      "requiredSkillValue": 150,
      "alternativePerk": "onTheMarch",
      "primaryDescription": "callToArms.primaryDescription",
      "primaryRole": "ArmyCommander",
      "secondaryDescription": "callToArms.secondaryDescription",
      "secondaryRole": "ArmyCommander"
  },
  {
      "id": 197,
      "name": "pickThemOfTheWalls.name",
      "skillId": 11,
      "requiredSkillValue": 175,
      "alternativePerk": "makeThemPay",
      "primaryDescription": "pickThemOfTheWalls.primaryDescription",
      "primaryRole": "Engineer",
      "secondaryDescription": "pickThemOfTheWalls.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 198,
      "name": "makeThemPay.name",
      "skillId": 11,
      "requiredSkillValue": 175,
      "alternativePerk": "pickThemOfTheWalls",
      "primaryDescription": "makeThemPay.primaryDescription",
      "primaryRole": "Engineer",
      "secondaryDescription": "makeThemPay.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 199,
      "name": "eliteReserves.name",
      "skillId": 11,
      "requiredSkillValue": 200,
      "alternativePerk": "encirclement",
      "primaryDescription": "eliteReserves.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "eliteReserves.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 200,
      "name": "encirclement.name",
      "skillId": 11,
      "requiredSkillValue": 200,
      "alternativePerk": "eliteReserves",
      "primaryDescription": "encirclement.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "encirclement.secondaryDescription",
      "secondaryRole": "ArmyCommander"
  },
  {
      "id": 201,
      "name": "preBattleManeuvers.name",
      "skillId": 11,
      "requiredSkillValue": 225,
      "alternativePerk": "besieged",
      "primaryDescription": "preBattleManeuvers.primaryDescription",
      "primaryRole": "PartyMember",
      "secondaryDescription": "preBattleManeuvers.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 202,
      "name": "besieged.name",
      "skillId": 11,
      "requiredSkillValue": 225,
      "alternativePerk": "preBattleManeuvers",
      "primaryDescription": "besieged.primaryDescription",
      "primaryRole": "PartyMember",
      "secondaryDescription": "besieged.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 203,
      "name": "counteroffensive.name",
      "skillId": 11,
      "requiredSkillValue": 250,
      "alternativePerk": "gensdarmes",
      "primaryDescription": "counteroffensive.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "counteroffensive.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 204,
      "name": "gensdarmes.name",
      "skillId": 11,
      "requiredSkillValue": 250,
      "alternativePerk": "counteroffensive",
      "primaryDescription": "gensdarmes.primaryDescription",
      "primaryRole": "Captain",
      "secondaryDescription": "gensdarmes.secondaryDescription",
      "secondaryRole": "Governor",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 205,
      "name": "tacticalMastery.name",
      "primaryDescription": "tacticalMastery.primaryDescription",
      "skillId": 11,
      "requiredSkillValue": 275,
      "primaryRole": "ArmyCommander"
  },
  {
      "id": 206,
      "name": "dayTraveler.name",
      "skillId": 10,
      "requiredSkillValue": 25,
      "alternativePerk": "nightRunner",
      "primaryDescription": "dayTraveler.primaryDescription",
      "primaryRole": "Scout",
      "secondaryDescription": "dayTraveler.secondaryDescription",
      "secondaryRole": "Scout"
  },
  {
      "id": 207,
      "name": "nightRunner.name",
      "skillId": 10,
      "requiredSkillValue": 25,
      "alternativePerk": "dayTraveler",
      "primaryDescription": "nightRunner.primaryDescription",
      "primaryRole": "Scout",
      "secondaryDescription": "nightRunner.secondaryDescription",
      "secondaryRole": "Scout"
  },
  {
      "id": 208,
      "name": "pathfinder.name",
      "skillId": 10,
      "requiredSkillValue": 50,
      "alternativePerk": "waterDiviner",
      "primaryDescription": "pathfinder.primaryDescription",
      "primaryRole": "Scout",
      "secondaryDescription": "pathfinder.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 209,
      "name": "waterDiviner.name",
      "skillId": 10,
      "requiredSkillValue": 50,
      "alternativePerk": "pathfinder",
      "primaryDescription": "waterDiviner.primaryDescription",
      "primaryRole": "Scout",
      "secondaryDescription": "waterDiviner.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 210,
      "name": "forestKin.name",
      "skillId": 10,
      "requiredSkillValue": 75,
      "alternativePerk": "desertBorn",
      "primaryDescription": "forestKin.primaryDescription",
      "primaryRole": "Scout",
      "secondaryDescription": "forestKin.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 211,
      "name": "desertBorn.name",
      "skillId": 10,
      "requiredSkillValue": 75,
      "alternativePerk": "forestKin",
      "primaryDescription": "desertBorn.primaryDescription",
      "primaryRole": "Scout",
      "secondaryDescription": "desertBorn.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 212,
      "name": "forcedMarch.name",
      "skillId": 10,
      "requiredSkillValue": 100,
      "alternativePerk": "unburdened",
      "primaryDescription": "forcedMarch.primaryDescription",
      "primaryRole": "Scout",
      "secondaryDescription": "forcedMarch.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 213,
      "name": "unburdened.name",
      "skillId": 10,
      "requiredSkillValue": 100,
      "alternativePerk": "forcedMarch",
      "primaryDescription": "unburdened.primaryDescription",
      "primaryRole": "Scout",
      "secondaryDescription": "unburdened.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 214,
      "name": "tracker.name",
      "skillId": 10,
      "requiredSkillValue": 125,
      "alternativePerk": "ranger",
      "primaryDescription": "tracker.primaryDescription",
      "primaryRole": "Scout",
      "secondaryDescription": "tracker.secondaryDescription",
      "secondaryRole": "Scout"
  },
  {
      "id": 215,
      "name": "ranger.name",
      "skillId": 10,
      "requiredSkillValue": 125,
      "alternativePerk": "tracker",
      "primaryDescription": "ranger.primaryDescription",
      "primaryRole": "Scout",
      "secondaryDescription": "ranger.secondaryDescription",
      "secondaryRole": "Scout"
  },
  {
      "id": 216,
      "name": "mountedScouts.name",
      "skillId": 10,
      "requiredSkillValue": 150,
      "alternativePerk": "patrols",
      "primaryDescription": "mountedScouts.primaryDescription",
      "primaryRole": "Scout",
      "secondaryDescription": "mountedScouts.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 217,
      "name": "patrols.name",
      "skillId": 10,
      "requiredSkillValue": 150,
      "alternativePerk": "mountedScouts",
      "primaryDescription": "patrols.primaryDescription",
      "primaryRole": "Scout",
      "secondaryDescription": "patrols.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 218,
      "name": "foragers.name",
      "skillId": 10,
      "requiredSkillValue": 175,
      "alternativePerk": "beastWhisperer",
      "primaryDescription": "foragers.primaryDescription",
      "primaryRole": "Scout",
      "secondaryDescription": "foragers.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 219,
      "name": "beastWhisperer.name",
      "skillId": 10,
      "requiredSkillValue": 175,
      "alternativePerk": "foragers",
      "primaryDescription": "beastWhisperer.primaryDescription",
      "primaryRole": "Scout",
      "secondaryDescription": "beastWhisperer.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 220,
      "name": "villageNetwork.name",
      "skillId": 10,
      "requiredSkillValue": 200,
      "alternativePerk": "rumourNetwork",
      "primaryDescription": "villageNetwork.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "villageNetwork.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 221,
      "name": "rumourNetwork.name",
      "skillId": 10,
      "requiredSkillValue": 200,
      "alternativePerk": "villageNetwork",
      "primaryDescription": "rumourNetwork.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "rumourNetwork.secondaryDescription",
      "secondaryRole": "Scout"
  },
  {
      "id": 222,
      "name": "vantagePoint.name",
      "skillId": 10,
      "requiredSkillValue": 225,
      "alternativePerk": "keenSight",
      "primaryDescription": "vantagePoint.primaryDescription",
      "primaryRole": "Scout",
      "secondaryDescription": "vantagePoint.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 223,
      "name": "keenSight.name",
      "skillId": 10,
      "requiredSkillValue": 225,
      "alternativePerk": "vantagePoint",
      "primaryDescription": "keenSight.primaryDescription",
      "primaryRole": "Scout",
      "secondaryDescription": "keenSight.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 224,
      "name": "vanguard.name",
      "skillId": 10,
      "requiredSkillValue": 250,
      "alternativePerk": "rearguard",
      "primaryDescription": "vanguard.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "vanguard.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 225,
      "name": "rearguard.name",
      "skillId": 10,
      "requiredSkillValue": 250,
      "alternativePerk": "vanguard",
      "primaryDescription": "rearguard.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "rearguard.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 226,
      "name": "uncannyInsight.name",
      "skillId": 10,
      "requiredSkillValue": 275,
      "alternativePerk": "(PerkObject) null",
      "primaryDescription": "uncannyInsight.primaryDescription",
      "primaryRole": "Scout",
      "secondaryDescription": "",
      "secondaryRole": "None"
  },
  {
      "id": 227,
      "name": "noRestForTheWicked.name",
      "skillId": 12,
      "requiredSkillValue": 25,
      "alternativePerk": "sweetTalker",
      "primaryDescription": "noRestForTheWicked.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "noRestForTheWicked.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 228,
      "name": "sweetTalker.name",
      "skillId": 12,
      "requiredSkillValue": 25,
      "alternativePerk": "noRestForTheWicked",
      "primaryDescription": "sweetTalker.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "sweetTalker.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 229,
      "name": "twoFaced.name",
      "skillId": 12,
      "requiredSkillValue": 50,
      "alternativePerk": "deepPockets",
      "primaryDescription": "twoFaced.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "twoFaced.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 230,
      "name": "deepPockets.name",
      "skillId": 12,
      "requiredSkillValue": 50,
      "alternativePerk": "twoFaced",
      "primaryDescription": "deepPockets.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "deepPockets.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 231,
      "name": "inBestLight.name",
      "skillId": 12,
      "requiredSkillValue": 75,
      "alternativePerk": "knowHow",
      "primaryDescription": "inBestLight.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "inBestLight.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 232,
      "name": "knowHow.name",
      "skillId": 12,
      "requiredSkillValue": 75,
      "alternativePerk": "inBestLight",
      "primaryDescription": "knowHow.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "knowHow.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 233,
      "name": "promises.name",
      "skillId": 12,
      "requiredSkillValue": 100,
      "alternativePerk": "slaveTrader",
      "primaryDescription": "promises.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "promises.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 234,
      "name": "slaveTrader.name",
      "skillId": 12,
      "requiredSkillValue": 100,
      "alternativePerk": "promises",
      "primaryDescription": "slaveTrader.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "slaveTrader.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 235,
      "name": "scarface.name",
      "skillId": 12,
      "requiredSkillValue": 125,
      "alternativePerk": "whiteLies",
      "primaryDescription": "scarface.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "scarface.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 236,
      "name": "whiteLies.name",
      "skillId": 12,
      "requiredSkillValue": 125,
      "alternativePerk": "scarface",
      "primaryDescription": "whiteLies.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "whiteLies.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 237,
      "name": "smugglerConnections.name",
      "skillId": 12,
      "requiredSkillValue": 150,
      "alternativePerk": "partnersInCrime",
      "primaryDescription": "smugglerConnections.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "smugglerConnections.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 238,
      "name": "partnersInCrime.name",
      "skillId": 12,
      "requiredSkillValue": 150,
      "alternativePerk": "smugglerConnections",
      "primaryDescription": "partnersInCrime.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "partnersInCrime.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 239,
      "name": "oneOfTheFamily.name",
      "skillId": 12,
      "requiredSkillValue": 175,
      "alternativePerk": "saltTheEarth",
      "primaryDescription": "oneOfTheFamily.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "oneOfTheFamily.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 240,
      "name": "saltTheEarth.name",
      "skillId": 12,
      "requiredSkillValue": 175,
      "alternativePerk": "oneOfTheFamily",
      "primaryDescription": "saltTheEarth.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "saltTheEarth.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 241,
      "name": "carver.name",
      "skillId": 12,
      "requiredSkillValue": 200,
      "alternativePerk": "ransomBroker",
      "primaryDescription": "carver.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "carver.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "OneHandedUser"
      ]
  },
  {
      "id": 242,
      "name": "ransomBroker.name",
      "skillId": 12,
      "requiredSkillValue": 200,
      "alternativePerk": "carver",
      "primaryDescription": "ransomBroker.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "ransomBroker.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 243,
      "name": "armsDealer.name",
      "skillId": 12,
      "requiredSkillValue": 225,
      "alternativePerk": "dirtyFighting",
      "primaryDescription": "armsDealer.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "armsDealer.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 244,
      "name": "dirtyFighting.name",
      "skillId": 12,
      "requiredSkillValue": 225,
      "alternativePerk": "armsDealer",
      "primaryDescription": "dirtyFighting.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "dirtyFighting.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 245,
      "name": "dashAndSlash.name",
      "skillId": 12,
      "requiredSkillValue": 250,
      "alternativePerk": "fleetFooted",
      "primaryDescription": "dashAndSlash.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "dashAndSlash.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "TwoHandedUser"
      ]
  },
  {
      "id": 246,
      "name": "fleetFooted.name",
      "skillId": 12,
      "requiredSkillValue": 250,
      "alternativePerk": "dashAndSlash",
      "primaryDescription": "fleetFooted.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "fleetFooted.secondaryDescription",
      "secondaryRole": "ClanLeader"
  },
  {
      "id": 247,
      "name": "rogueExtraordinaire.name",
      "skillId": 12,
      "requiredSkillValue": 275,
      "alternativePerk": "(PerkObject) null",
      "primaryDescription": "rogueExtraordinaire.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "",
      "secondaryRole": "None"
  },
  {
      "id": 248,
      "name": "combatTips.name",
      "skillId": 14,
      "requiredSkillValue": 25,
      "alternativePerk": "raiseTheMeek",
      "primaryDescription": "combatTips.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "combatTips.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 249,
      "name": "raiseTheMeek.name",
      "skillId": 14,
      "requiredSkillValue": 25,
      "alternativePerk": "combatTips",
      "primaryDescription": "raiseTheMeek.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "raiseTheMeek.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 250,
      "name": "ferventAttacker.name",
      "skillId": 14,
      "requiredSkillValue": 50,
      "alternativePerk": "stoutDefender",
      "primaryDescription": "ferventAttacker.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "ferventAttacker.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 251,
      "name": "stoutDefender.name",
      "skillId": 14,
      "requiredSkillValue": 50,
      "alternativePerk": "ferventAttacker",
      "primaryDescription": "stoutDefender.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "stoutDefender.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 252,
      "name": "authority.name",
      "skillId": 14,
      "requiredSkillValue": 75,
      "alternativePerk": "heroicLeader",
      "primaryDescription": "authority.primaryDescription",
      "primaryRole": "Governor",
      "secondaryDescription": "authority.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 253,
      "name": "heroicLeader.name",
      "skillId": 14,
      "requiredSkillValue": 75,
      "alternativePerk": "authority",
      "primaryDescription": "heroicLeader.primaryDescription",
      "primaryRole": "Governor",
      "secondaryDescription": "heroicLeader.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 254,
      "name": "loyaltyAndHonor.name",
      "skillId": 14,
      "requiredSkillValue": 100,
      "alternativePerk": "famousCommander",
      "primaryDescription": "loyaltyAndHonor.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "loyaltyAndHonor.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 255,
      "name": "famousCommander.name",
      "skillId": 14,
      "requiredSkillValue": 100,
      "alternativePerk": "loyaltyAndHonor",
      "primaryDescription": "famousCommander.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "famousCommander.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 256,
      "name": "presence.name",
      "skillId": 14,
      "requiredSkillValue": 125,
      "alternativePerk": "leaderOfTheMasses",
      "primaryDescription": "presence.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "presence.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 257,
      "name": "leaderOfTheMasses.name",
      "skillId": 14,
      "requiredSkillValue": 125,
      "alternativePerk": "presence",
      "primaryDescription": "leaderOfTheMasses.primaryDescription",
      "primaryRole": "ClanLeader",
      "secondaryDescription": "leaderOfTheMasses.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 258,
      "name": "veteransRespect.name",
      "skillId": 14,
      "requiredSkillValue": 150,
      "alternativePerk": "citizenMilitia",
      "primaryDescription": "veteransRespect.primaryDescription",
      "primaryRole": "Governor",
      "secondaryDescription": "veteransRespect.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 259,
      "name": "citizenMilitia.name",
      "skillId": 14,
      "requiredSkillValue": 150,
      "alternativePerk": "veteransRespect",
      "primaryDescription": "citizenMilitia.primaryDescription",
      "primaryRole": "Governor",
      "secondaryDescription": "citizenMilitia.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 260,
      "name": "inspiringLeader.name",
      "skillId": 14,
      "requiredSkillValue": 175,
      "alternativePerk": "upliftingSpirit",
      "primaryDescription": "inspiringLeader.primaryDescription",
      "primaryRole": "ArmyCommander",
      "secondaryDescription": "inspiringLeader.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 261,
      "name": "upliftingSpirit.name",
      "skillId": 14,
      "requiredSkillValue": 175,
      "alternativePerk": "inspiringLeader",
      "primaryDescription": "upliftingSpirit.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "upliftingSpirit.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 262,
      "name": "makeADifference.name",
      "skillId": 14,
      "requiredSkillValue": 200,
      "alternativePerk": "leadByExample",
      "primaryDescription": "makeADifference.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "makeADifference.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 263,
      "name": "leadByExample.name",
      "skillId": 14,
      "requiredSkillValue": 200,
      "alternativePerk": "makeADifference",
      "primaryDescription": "leadByExample.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "leadByExample.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 264,
      "name": "trustedCommander.name",
      "skillId": 14,
      "requiredSkillValue": 225,
      "alternativePerk": "greatLeader",
      "primaryDescription": "trustedCommander.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "trustedCommander.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 265,
      "name": "greatLeader.name",
      "skillId": 14,
      "requiredSkillValue": 225,
      "alternativePerk": "trustedCommander",
      "primaryDescription": "greatLeader.primaryDescription",
      "primaryRole": "ArmyCommander",
      "secondaryDescription": "greatLeader.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 266,
      "name": "wePledgeOurSwords.name",
      "skillId": 14,
      "requiredSkillValue": 250,
      "alternativePerk": "talentMagnet",
      "primaryDescription": "wePledgeOurSwords.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "wePledgeOurSwords.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 267,
      "name": "talentMagnet.name",
      "skillId": 14,
      "requiredSkillValue": 250,
      "alternativePerk": "wePledgeOurSwords",
      "primaryDescription": "talentMagnet.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "talentMagnet.secondaryDescription",
      "secondaryRole": "ClanLeader"
  },
  {
      "id": 268,
      "name": "ultimateLeader.name",
      "skillId": 14,
      "requiredSkillValue": 275,
      "alternativePerk": "(PerkObject) null",
      "primaryDescription": "ultimateLeader.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 269,
      "name": "virile.name",
      "skillId": 13,
      "requiredSkillValue": 25,
      "alternativePerk": "selfPromoter",
      "primaryDescription": "virile.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "virile.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 270,
      "name": "selfPromoter.name",
      "skillId": 13,
      "requiredSkillValue": 25,
      "alternativePerk": "virile",
      "primaryDescription": "selfPromoter.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "selfPromoter.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 271,
      "name": "oratory.name",
      "skillId": 13,
      "requiredSkillValue": 50,
      "alternativePerk": "warlord",
      "primaryDescription": "oratory.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "oratory.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 272,
      "name": "warlord.name",
      "skillId": 13,
      "requiredSkillValue": 50,
      "alternativePerk": "oratory",
      "primaryDescription": "warlord.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "warlord.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 273,
      "name": "forgivableGrievances.name",
      "skillId": 13,
      "requiredSkillValue": 75,
      "alternativePerk": "meaningfulFavors",
      "primaryDescription": "forgivableGrievances.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "forgivableGrievances.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 274,
      "name": "meaningfulFavors.name",
      "skillId": 13,
      "requiredSkillValue": 75,
      "alternativePerk": "forgivableGrievances",
      "primaryDescription": "meaningfulFavors.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "meaningfulFavors.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 275,
      "name": "inBloom.name",
      "skillId": 13,
      "requiredSkillValue": 100,
      "alternativePerk": "youngAndRespectful",
      "primaryDescription": "inBloom.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "inBloom.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 276,
      "name": "youngAndRespectful.name",
      "skillId": 13,
      "requiredSkillValue": 100,
      "alternativePerk": "inBloom",
      "primaryDescription": "youngAndRespectful.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "youngAndRespectful.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 277,
      "name": "firebrand.name",
      "skillId": 13,
      "requiredSkillValue": 125,
      "alternativePerk": "flexibleEthics",
      "primaryDescription": "firebrand.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "firebrand.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 278,
      "name": "flexibleEthics.name",
      "skillId": 13,
      "requiredSkillValue": 125,
      "alternativePerk": "firebrand",
      "primaryDescription": "flexibleEthics.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "flexibleEthics.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 279,
      "name": "effortForThePeople.name",
      "skillId": 13,
      "requiredSkillValue": 150,
      "alternativePerk": "slickNegotiator",
      "primaryDescription": "effortForThePeople.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "effortForThePeople.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 280,
      "name": "slickNegotiator.name",
      "skillId": 13,
      "requiredSkillValue": 150,
      "alternativePerk": "effortForThePeople",
      "primaryDescription": "slickNegotiator.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "slickNegotiator.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 281,
      "name": "goodNatured.name",
      "skillId": 13,
      "requiredSkillValue": 175,
      "alternativePerk": "tribute",
      "primaryDescription": "goodNatured.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "goodNatured.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 282,
      "name": "tribute.name",
      "skillId": 13,
      "requiredSkillValue": 175,
      "alternativePerk": "goodNatured",
      "primaryDescription": "tribute.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "tribute.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 283,
      "name": "moralLeader.name",
      "skillId": 13,
      "requiredSkillValue": 200,
      "alternativePerk": "naturalLeader",
      "primaryDescription": "moralLeader.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "moralLeader.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 284,
      "name": "naturalLeader.name",
      "skillId": 13,
      "requiredSkillValue": 200,
      "alternativePerk": "moralLeader",
      "primaryDescription": "naturalLeader.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "naturalLeader.secondaryDescription",
      "secondaryRole": "ClanLeader"
  },
  {
      "id": 285,
      "name": "publicSpeaker.name",
      "skillId": 13,
      "requiredSkillValue": 225,
      "alternativePerk": "parade",
      "primaryDescription": "publicSpeaker.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "publicSpeaker.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 286,
      "name": "parade.name",
      "skillId": 13,
      "requiredSkillValue": 225,
      "alternativePerk": "publicSpeaker",
      "primaryDescription": "parade.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "parade.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 287,
      "name": "camaraderie.name",
      "skillId": 13,
      "requiredSkillValue": 250,
      "alternativePerk": "(PerkObject) null",
      "primaryDescription": "camaraderie.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "camaraderie.secondaryDescription",
      "secondaryRole": "ClanLeader"
  },
  {
      "id": 288,
      "name": "immortalCharm.name",
      "primaryDescription": "immortalCharm.primaryDescription",
      "skillId": 13,
      "requiredSkillValue": 275,
      "primaryRole": "Personal"
  },
  {
      "id": 289,
      "name": "appraiser.name",
      "skillId": 15,
      "requiredSkillValue": 25,
      "alternativePerk": "wholeSeller",
      "primaryDescription": "appraiser.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "appraiser.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 290,
      "name": "wholeSeller.name",
      "skillId": 15,
      "requiredSkillValue": 25,
      "alternativePerk": "appraiser",
      "primaryDescription": "wholeSeller.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "wholeSeller.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 291,
      "name": "caravanMaster.name",
      "skillId": 15,
      "requiredSkillValue": 50,
      "alternativePerk": "marketDealer",
      "primaryDescription": "caravanMaster.primaryDescription",
      "primaryRole": "Quartermaster",
      "secondaryDescription": "caravanMaster.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 292,
      "name": "marketDealer.name",
      "skillId": 15,
      "requiredSkillValue": 50,
      "alternativePerk": "caravanMaster",
      "primaryDescription": "marketDealer.primaryDescription",
      "primaryRole": "ClanLeader",
      "secondaryDescription": "marketDealer.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 293,
      "name": "travelingRumors.name",
      "skillId": 15,
      "requiredSkillValue": 75,
      "alternativePerk": "localConnection",
      "primaryDescription": "travelingRumors.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "travelingRumors.secondaryDescription",
      "secondaryRole": "Quartermaster"
  },
  {
      "id": 294,
      "name": "localConnection.name",
      "skillId": 15,
      "requiredSkillValue": 75,
      "alternativePerk": "travelingRumors",
      "primaryDescription": "localConnection.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "localConnection.secondaryDescription",
      "secondaryRole": "Quartermaster"
  },
  {
      "id": 295,
      "name": "distributedGoods.name",
      "skillId": 15,
      "requiredSkillValue": 100,
      "alternativePerk": "tollgates",
      "primaryDescription": "distributedGoods.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "distributedGoods.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 296,
      "name": "tollgates.name",
      "skillId": 15,
      "requiredSkillValue": 100,
      "alternativePerk": "distributedGoods",
      "primaryDescription": "tollgates.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "tollgates.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 297,
      "name": "artisanCommunity.name",
      "skillId": 15,
      "requiredSkillValue": 125,
      "alternativePerk": "greatInvestor",
      "primaryDescription": "artisanCommunity.primaryDescription",
      "primaryRole": "ClanLeader",
      "secondaryDescription": "artisanCommunity.secondaryDescription",
      "secondaryRole": "Quartermaster"
  },
  {
      "id": 298,
      "name": "greatInvestor.name",
      "skillId": 15,
      "requiredSkillValue": 125,
      "alternativePerk": "artisanCommunity",
      "primaryDescription": "greatInvestor.primaryDescription",
      "primaryRole": "ClanLeader",
      "secondaryDescription": "greatInvestor.secondaryDescription",
      "secondaryRole": "Quartermaster"
  },
  {
      "id": 299,
      "name": "mercenaryConnections.name",
      "skillId": 15,
      "requiredSkillValue": 150,
      "alternativePerk": "contentTrades",
      "primaryDescription": "mercenaryConnections.primaryDescription",
      "primaryRole": "Governor",
      "secondaryDescription": "mercenaryConnections.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 300,
      "name": "contentTrades.name",
      "skillId": 15,
      "requiredSkillValue": 150,
      "alternativePerk": "mercenaryConnections",
      "primaryDescription": "contentTrades.primaryDescription",
      "primaryRole": "Governor",
      "secondaryDescription": "contentTrades.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 301,
      "name": "insurancePlans.name",
      "skillId": 15,
      "requiredSkillValue": 175,
      "alternativePerk": "rapidDevelopment",
      "primaryDescription": "insurancePlans.primaryDescription",
      "primaryRole": "ClanLeader",
      "secondaryDescription": "insurancePlans.secondaryDescription",
      "secondaryRole": "Quartermaster"
  },
  {
      "id": 302,
      "name": "rapidDevelopment.name",
      "skillId": 15,
      "requiredSkillValue": 175,
      "alternativePerk": "insurancePlans",
      "primaryDescription": "rapidDevelopment.primaryDescription",
      "primaryRole": "ClanLeader",
      "secondaryDescription": "rapidDevelopment.secondaryDescription",
      "secondaryRole": "Quartermaster"
  },
  {
      "id": 303,
      "name": "granaryAccountant.name",
      "skillId": 15,
      "requiredSkillValue": 200,
      "alternativePerk": "tradeyardForeman",
      "primaryDescription": "granaryAccountant.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "granaryAccountant.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 304,
      "name": "tradeyardForeman.name",
      "skillId": 15,
      "requiredSkillValue": 200,
      "alternativePerk": "granaryAccountant",
      "primaryDescription": "tradeyardForeman.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "tradeyardForeman.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 305,
      "name": "swordForBarter.name",
      "skillId": 15,
      "requiredSkillValue": 225,
      "alternativePerk": "selfMadeMan",
      "primaryDescription": "swordForBarter.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "swordForBarter.secondaryDescription",
      "secondaryRole": "Quartermaster"
  },
  {
      "id": 306,
      "name": "selfMadeMan.name",
      "skillId": 15,
      "requiredSkillValue": 225,
      "alternativePerk": "swordForBarter",
      "primaryDescription": "selfMadeMan.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "selfMadeMan.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 307,
      "name": "silverTongue.name",
      "skillId": 15,
      "requiredSkillValue": 250,
      "alternativePerk": "springOfGold",
      "primaryDescription": "silverTongue.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "silverTongue.secondaryDescription",
      "secondaryRole": "Quartermaster"
  },
  {
      "id": 308,
      "name": "springOfGold.name",
      "skillId": 15,
      "requiredSkillValue": 250,
      "alternativePerk": "silverTongue",
      "primaryDescription": "springOfGold.primaryDescription",
      "primaryRole": "ClanLeader",
      "secondaryDescription": "springOfGold.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 309,
      "name": "manOfMeans.name",
      "skillId": 15,
      "requiredSkillValue": 275,
      "alternativePerk": "trickleDown",
      "primaryDescription": "manOfMeans.primaryDescription",
      "primaryRole": "ClanLeader",
      "secondaryDescription": "manOfMeans.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 310,
      "name": "trickleDown.name",
      "skillId": 15,
      "requiredSkillValue": 275,
      "alternativePerk": "manOfMeans",
      "primaryDescription": "trickleDown.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "trickleDown.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 311,
      "name": "everythingHasAPrice.name",
      "primaryDescription": "everythingHasAPrice.primaryDescription",
      "skillId": 15,
      "requiredSkillValue": 300,
      "primaryRole": "Personal"
  },
  {
      "id": 312,
      "name": "spartan.name",
      "skillId": 16,
      "requiredSkillValue": 25,
      "alternativePerk": "frugal",
      "primaryDescription": "spartan.primaryDescription",
      "primaryRole": "Quartermaster",
      "secondaryDescription": "spartan.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 313,
      "name": "frugal.name",
      "skillId": 16,
      "requiredSkillValue": 25,
      "alternativePerk": "spartan",
      "primaryDescription": "frugal.primaryDescription",
      "primaryRole": "Quartermaster",
      "secondaryDescription": "frugal.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 314,
      "name": "sevenVeterans.name",
      "skillId": 16,
      "requiredSkillValue": 50,
      "alternativePerk": "drillSergant",
      "primaryDescription": "sevenVeterans.primaryDescription",
      "primaryRole": "Quartermaster",
      "secondaryDescription": "sevenVeterans.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 315,
      "name": "drillSergant.name",
      "skillId": 16,
      "requiredSkillValue": 50,
      "alternativePerk": "sevenVeterans",
      "primaryDescription": "drillSergant.primaryDescription",
      "primaryRole": "Quartermaster",
      "secondaryDescription": "drillSergant.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 316,
      "name": "sweatshops.name",
      "skillId": 16,
      "requiredSkillValue": 75,
      "alternativePerk": "stiffUpperLip",
      "primaryDescription": "sweatshops.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "sweatshops.secondaryDescription",
      "secondaryRole": "Quartermaster"
  },
  {
      "id": 317,
      "name": "stiffUpperLip.name",
      "skillId": 16,
      "requiredSkillValue": 75,
      "alternativePerk": "sweatshops",
      "primaryDescription": "stiffUpperLip.primaryDescription",
      "primaryRole": "Quartermaster",
      "secondaryDescription": "stiffUpperLip.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 318,
      "name": "paidInPromise.name",
      "skillId": 16,
      "requiredSkillValue": 100,
      "alternativePerk": "efficientCampaigner",
      "primaryDescription": "paidInPromise.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "paidInPromise.secondaryDescription",
      "secondaryRole": "Quartermaster"
  },
  {
      "id": 319,
      "name": "efficientCampaigner.name",
      "skillId": 16,
      "requiredSkillValue": 100,
      "alternativePerk": "paidInPromise",
      "primaryDescription": "efficientCampaigner.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "efficientCampaigner.secondaryDescription",
      "secondaryRole": "Quartermaster"
  },
  {
      "id": 320,
      "name": "givingHands.name",
      "skillId": 16,
      "requiredSkillValue": 125,
      "alternativePerk": "logistician",
      "primaryDescription": "givingHands.primaryDescription",
      "primaryRole": "Quartermaster",
      "secondaryDescription": "givingHands.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 321,
      "name": "logistician.name",
      "skillId": 16,
      "requiredSkillValue": 125,
      "alternativePerk": "givingHands",
      "primaryDescription": "logistician.primaryDescription",
      "primaryRole": "Quartermaster",
      "secondaryDescription": "logistician.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 322,
      "name": "relocation.name",
      "skillId": 16,
      "requiredSkillValue": 150,
      "alternativePerk": "aidCorps",
      "primaryDescription": "relocation.primaryDescription",
      "primaryRole": "Quartermaster",
      "secondaryDescription": "relocation.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 323,
      "name": "aidCorps.name",
      "skillId": 16,
      "requiredSkillValue": 150,
      "alternativePerk": "relocation",
      "primaryDescription": "aidCorps.primaryDescription",
      "primaryRole": "Quartermaster",
      "secondaryDescription": "aidCorps.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 324,
      "name": "gourmet.name",
      "skillId": 16,
      "requiredSkillValue": 175,
      "alternativePerk": "soundReserves",
      "primaryDescription": "gourmet.primaryDescription",
      "primaryRole": "Quartermaster",
      "secondaryDescription": "gourmet.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 325,
      "name": "soundReserves.name",
      "skillId": 16,
      "requiredSkillValue": 175,
      "alternativePerk": "gourmet",
      "primaryDescription": "soundReserves.primaryDescription",
      "primaryRole": "Quartermaster",
      "secondaryDescription": "soundReserves.secondaryDescription",
      "secondaryRole": "Quartermaster"
  },
  {
      "id": 326,
      "name": "forcedLabor.name",
      "skillId": 16,
      "requiredSkillValue": 200,
      "alternativePerk": "contractors",
      "primaryDescription": "forcedLabor.primaryDescription",
      "primaryRole": "Quartermaster",
      "secondaryDescription": "forcedLabor.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 327,
      "name": "contractors.name",
      "skillId": 16,
      "requiredSkillValue": 200,
      "alternativePerk": "forcedLabor",
      "primaryDescription": "contractors.primaryDescription",
      "primaryRole": "Quartermaster",
      "secondaryDescription": "contractors.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 328,
      "name": "arenicosMules.name",
      "skillId": 16,
      "requiredSkillValue": 225,
      "alternativePerk": "arenicosHorses",
      "primaryDescription": "arenicosMules.primaryDescription",
      "primaryRole": "Quartermaster",
      "secondaryDescription": "arenicosMules.secondaryDescription",
      "secondaryRole": "Quartermaster"
  },
  {
      "id": 329,
      "name": "arenicosHorses.name",
      "skillId": 16,
      "requiredSkillValue": 225,
      "alternativePerk": "arenicosMules",
      "primaryDescription": "arenicosHorses.primaryDescription",
      "primaryRole": "Quartermaster",
      "secondaryDescription": "arenicosHorses.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 330,
      "name": "masterOfPlanning.name",
      "skillId": 16,
      "requiredSkillValue": 250,
      "alternativePerk": "masterOfWarcraft",
      "primaryDescription": "masterOfPlanning.primaryDescription",
      "primaryRole": "Quartermaster",
      "secondaryDescription": "masterOfPlanning.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 331,
      "name": "masterOfWarcraft.name",
      "skillId": 16,
      "requiredSkillValue": 250,
      "alternativePerk": "masterOfPlanning",
      "primaryDescription": "masterOfWarcraft.primaryDescription",
      "primaryRole": "Quartermaster",
      "secondaryDescription": "masterOfWarcraft.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 332,
      "name": "priceOfLoyalty.name",
      "skillId": 16,
      "requiredSkillValue": 275,
      "alternativePerk": "(PerkObject) null",
      "primaryDescription": "priceOfLoyalty.primaryDescription",
      "primaryRole": "Quartermaster",
      "secondaryDescription": "priceOfLoyalty.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 333,
      "name": "selfMedication.name",
      "skillId": 17,
      "requiredSkillValue": 25,
      "alternativePerk": "preventiveMedicine",
      "primaryDescription": "selfMedication.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "selfMedication.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 334,
      "name": "preventiveMedicine.name",
      "skillId": 17,
      "requiredSkillValue": 25,
      "alternativePerk": "selfMedication",
      "primaryDescription": "preventiveMedicine.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "preventiveMedicine.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 335,
      "name": "triageTent.name",
      "skillId": 17,
      "requiredSkillValue": 50,
      "alternativePerk": "walkItOff",
      "primaryDescription": "triageTent.primaryDescription",
      "primaryRole": "Surgeon",
      "secondaryDescription": "triageTent.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 336,
      "name": "walkItOff.name",
      "skillId": 17,
      "requiredSkillValue": 50,
      "alternativePerk": "triageTent",
      "primaryDescription": "walkItOff.primaryDescription",
      "primaryRole": "Surgeon",
      "secondaryDescription": "walkItOff.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 337,
      "name": "sledges.name",
      "skillId": 17,
      "requiredSkillValue": 75,
      "alternativePerk": "doctorsOath",
      "primaryDescription": "sledges.primaryDescription",
      "primaryRole": "Surgeon",
      "secondaryDescription": "sledges.secondaryDescription",
      "secondaryRole": "PartyLeader"
  },
  {
      "id": 338,
      "name": "doctorsOath.name",
      "skillId": 17,
      "requiredSkillValue": 75,
      "alternativePerk": "sledges",
      "primaryDescription": "doctorsOath.primaryDescription",
      "primaryRole": "Surgeon",
      "secondaryDescription": "doctorsOath.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 339,
      "name": "bestMedicine.name",
      "skillId": 17,
      "requiredSkillValue": 100,
      "alternativePerk": "goodLodging",
      "primaryDescription": "bestMedicine.primaryDescription",
      "primaryRole": "Surgeon",
      "secondaryDescription": "bestMedicine.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 340,
      "name": "goodLodging.name",
      "skillId": 17,
      "requiredSkillValue": 100,
      "alternativePerk": "bestMedicine",
      "primaryDescription": "goodLodging.primaryDescription",
      "primaryRole": "Surgeon",
      "secondaryDescription": "goodLodging.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 341,
      "name": "siegeMedic.name",
      "skillId": 17,
      "requiredSkillValue": 125,
      "alternativePerk": "veterinarian",
      "primaryDescription": "siegeMedic.primaryDescription",
      "primaryRole": "Surgeon",
      "secondaryDescription": "siegeMedic.secondaryDescription",
      "secondaryRole": "Surgeon"
  },
  {
      "id": 342,
      "name": "veterinarian.name",
      "skillId": 17,
      "requiredSkillValue": 125,
      "alternativePerk": "siegeMedic",
      "primaryDescription": "veterinarian.primaryDescription",
      "primaryRole": "Surgeon",
      "secondaryDescription": "veterinarian.secondaryDescription",
      "secondaryRole": "Surgeon"
  },
  {
      "id": 343,
      "name": "pristineStreets.name",
      "skillId": 17,
      "requiredSkillValue": 150,
      "alternativePerk": "bushDoctor",
      "primaryDescription": "pristineStreets.primaryDescription",
      "primaryRole": "Governor",
      "secondaryDescription": "pristineStreets.secondaryDescription",
      "secondaryRole": "Surgeon"
  },
  {
      "id": 344,
      "name": "bushDoctor.name",
      "skillId": 17,
      "requiredSkillValue": 150,
      "alternativePerk": "pristineStreets",
      "primaryDescription": "bushDoctor.primaryDescription",
      "primaryRole": "Governor",
      "secondaryDescription": "bushDoctor.secondaryDescription",
      "secondaryRole": "Surgeon"
  },
  {
      "id": 345,
      "name": "perfectHealth.name",
      "skillId": 17,
      "requiredSkillValue": 175,
      "alternativePerk": "healthAdvise",
      "primaryDescription": "perfectHealth.primaryDescription",
      "primaryRole": "Surgeon",
      "secondaryDescription": "perfectHealth.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 346,
      "name": "healthAdvise.name",
      "skillId": 17,
      "requiredSkillValue": 175,
      "alternativePerk": "perfectHealth",
      "primaryDescription": "healthAdvise.primaryDescription",
      "primaryRole": "ClanLeader",
      "secondaryDescription": "healthAdvise.secondaryDescription",
      "secondaryRole": "Surgeon"
  },
  {
      "id": 347,
      "name": "physicianOfPeople.name",
      "skillId": 17,
      "requiredSkillValue": 200,
      "alternativePerk": "cleanInfrastructure",
      "primaryDescription": "physicianOfPeople.primaryDescription",
      "primaryRole": "Governor",
      "secondaryDescription": "physicianOfPeople.secondaryDescription",
      "secondaryRole": "Surgeon"
  },
  {
      "id": 348,
      "name": "cleanInfrastructure.name",
      "skillId": 17,
      "requiredSkillValue": 200,
      "alternativePerk": "physicianOfPeople",
      "primaryDescription": "cleanInfrastructure.primaryDescription",
      "primaryRole": "Governor",
      "secondaryDescription": "cleanInfrastructure.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 349,
      "name": "cheatDeath.name",
      "skillId": 17,
      "requiredSkillValue": 225,
      "alternativePerk": "fortitudeTonic",
      "primaryDescription": "cheatDeath.primaryDescription",
      "primaryRole": "Personal",
      "secondaryDescription": "cheatDeath.secondaryDescription",
      "secondaryRole": "Surgeon"
  },
  {
      "id": 350,
      "name": "fortitudeTonic.name",
      "skillId": 17,
      "requiredSkillValue": 225,
      "alternativePerk": "cheatDeath",
      "primaryDescription": "fortitudeTonic.primaryDescription",
      "primaryRole": "PartyLeader",
      "secondaryDescription": "fortitudeTonic.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 351,
      "name": "helpingHands.name",
      "skillId": 17,
      "requiredSkillValue": 250,
      "alternativePerk": "battleHardened",
      "primaryDescription": "helpingHands.primaryDescription",
      "primaryRole": "Surgeon",
      "secondaryDescription": "helpingHands.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 352,
      "name": "battleHardened.name",
      "skillId": 17,
      "requiredSkillValue": 250,
      "alternativePerk": "helpingHands",
      "primaryDescription": "battleHardened.primaryDescription",
      "primaryRole": "Surgeon",
      "secondaryDescription": "battleHardened.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 353,
      "name": "ministerOfHealth.name",
      "primaryDescription": "ministerOfHealth.primaryDescription",
      "skillId": 17,
      "requiredSkillValue": 275,
      "primaryRole": "Personal"
  },
  {
      "id": 354,
      "name": "scaffolds.name",
      "skillId": 18,
      "requiredSkillValue": 25,
      "alternativePerk": "torsionEngines",
      "primaryDescription": "scaffolds.primaryDescription",
      "primaryRole": "Engineer",
      "secondaryDescription": "scaffolds.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 355,
      "name": "torsionEngines.name",
      "skillId": 18,
      "requiredSkillValue": 25,
      "alternativePerk": "scaffolds",
      "primaryDescription": "torsionEngines.primaryDescription",
      "primaryRole": "Engineer",
      "secondaryDescription": "torsionEngines.secondaryDescription",
      "secondaryRole": "Personal"
  },
  {
      "id": 356,
      "name": "siegeWorks.name",
      "skillId": 18,
      "requiredSkillValue": 50,
      "alternativePerk": "prisonArchitect",
      "primaryDescription": "siegeWorks.primaryDescription",
      "primaryRole": "Engineer",
      "secondaryDescription": "siegeWorks.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 357,
      "name": "prisonArchitect.name",
      "skillId": 18,
      "requiredSkillValue": 50,
      "alternativePerk": "siegeWorks",
      "primaryDescription": "prisonArchitect.primaryDescription",
      "primaryRole": "Engineer",
      "secondaryDescription": "prisonArchitect.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 358,
      "name": "carpenters.name",
      "skillId": 18,
      "requiredSkillValue": 75,
      "alternativePerk": "militaryPlanner",
      "primaryDescription": "carpenters.primaryDescription",
      "primaryRole": "Engineer",
      "secondaryDescription": "carpenters.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 359,
      "name": "militaryPlanner.name",
      "skillId": 18,
      "requiredSkillValue": 75,
      "alternativePerk": "carpenters",
      "primaryDescription": "militaryPlanner.primaryDescription",
      "primaryRole": "Engineer",
      "secondaryDescription": "militaryPlanner.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 360,
      "name": "wallBreaker.name",
      "skillId": 18,
      "requiredSkillValue": 100,
      "alternativePerk": "dreadfulSieger",
      "primaryDescription": "wallBreaker.primaryDescription",
      "primaryRole": "Engineer",
      "secondaryDescription": "wallBreaker.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 361,
      "name": "dreadfulSieger.name",
      "skillId": 18,
      "requiredSkillValue": 100,
      "alternativePerk": "wallBreaker",
      "primaryDescription": "dreadfulSieger.primaryDescription",
      "primaryRole": "Governor",
      "secondaryDescription": "dreadfulSieger.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "CrossbowUser"
      ]
  },
  {
      "id": 362,
      "name": "salvager.name",
      "skillId": 18,
      "requiredSkillValue": 125,
      "alternativePerk": "foreman",
      "primaryDescription": "salvager.primaryDescription",
      "primaryRole": "Engineer",
      "secondaryDescription": "salvager.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 363,
      "name": "foreman.name",
      "skillId": 18,
      "requiredSkillValue": 125,
      "alternativePerk": "salvager",
      "primaryDescription": "foreman.primaryDescription",
      "primaryRole": "Engineer",
      "secondaryDescription": "foreman.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 364,
      "name": "stonecutters.name",
      "skillId": 18,
      "requiredSkillValue": 150,
      "alternativePerk": "siegeEngineer",
      "primaryDescription": "stonecutters.primaryDescription",
      "primaryRole": "Governor",
      "secondaryDescription": "stonecutters.secondaryDescription",
      "secondaryRole": "Engineer"
  },
  {
      "id": 365,
      "name": "siegeEngineer.name",
      "skillId": 18,
      "requiredSkillValue": 150,
      "alternativePerk": "stonecutters",
      "primaryDescription": "siegeEngineer.primaryDescription",
      "primaryRole": "Governor",
      "secondaryDescription": "siegeEngineer.secondaryDescription",
      "secondaryRole": "Engineer"
  },
  {
      "id": 366,
      "name": "campBuilding.name",
      "skillId": 18,
      "requiredSkillValue": 175,
      "alternativePerk": "battlements",
      "primaryDescription": "campBuilding.primaryDescription",
      "primaryRole": "ArmyCommander",
      "secondaryDescription": "campBuilding.secondaryDescription",
      "secondaryRole": "Engineer"
  },
  {
      "id": 367,
      "name": "battlements.name",
      "skillId": 18,
      "requiredSkillValue": 175,
      "alternativePerk": "campBuilding",
      "primaryDescription": "battlements.primaryDescription",
      "primaryRole": "Engineer",
      "secondaryDescription": "battlements.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 368,
      "name": "engineeringGuilds.name",
      "skillId": 18,
      "requiredSkillValue": 200,
      "alternativePerk": "apprenticeship",
      "primaryDescription": "engineeringGuilds.primaryDescription",
      "primaryRole": "Engineer",
      "secondaryDescription": "engineeringGuilds.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 369,
      "name": "apprenticeship.name",
      "skillId": 18,
      "requiredSkillValue": 200,
      "alternativePerk": "engineeringGuilds",
      "primaryDescription": "apprenticeship.primaryDescription",
      "primaryRole": "Engineer",
      "secondaryDescription": "apprenticeship.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 370,
      "name": "metallurgy.name",
      "skillId": 18,
      "requiredSkillValue": 225,
      "alternativePerk": "improvedTools",
      "primaryDescription": "metallurgy.primaryDescription",
      "primaryRole": "Engineer",
      "secondaryDescription": "metallurgy.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 371,
      "name": "improvedTools.name",
      "skillId": 18,
      "requiredSkillValue": 225,
      "alternativePerk": "metallurgy",
      "primaryDescription": "improvedTools.primaryDescription",
      "primaryRole": "Engineer",
      "secondaryDescription": "improvedTools.secondaryDescription",
      "secondaryRole": "Captain",
      "troopClasses": [
          "All"
      ]
  },
  {
      "id": 372,
      "name": "clockwork.name",
      "skillId": 18,
      "requiredSkillValue": 250,
      "alternativePerk": "architecturalCommisions",
      "primaryDescription": "clockwork.primaryDescription",
      "primaryRole": "Engineer",
      "secondaryDescription": "clockwork.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 373,
      "name": "architecturalCommisions.name",
      "skillId": 18,
      "requiredSkillValue": 250,
      "alternativePerk": "clockwork",
      "primaryDescription": "architecturalCommisions.primaryDescription",
      "primaryRole": "Engineer",
      "secondaryDescription": "architecturalCommisions.secondaryDescription",
      "secondaryRole": "Governor"
  },
  {
      "id": 374,
      "name": "masterwork.name",
      "primaryDescription": "masterwork.primaryDescription",
      "skillId": 18,
      "requiredSkillValue": 275,
      "primaryRole": "Engineer"
  }
]

export default perks