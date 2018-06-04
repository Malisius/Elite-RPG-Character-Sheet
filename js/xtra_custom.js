function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

/* When a theme-change item is selected, update theme */
jQuery(function($) {
    $('body').on('click', '.change-style-menu-item', function() {
      var theme_name = $(this).attr('rel');
      var theme = "css/" + theme_name + "/bootstrap.min.css";
      set_theme(theme);
      $('link[rel=theme_name').text(theme_name + " (Current)")
    });
});

function set_theme(theme) {
  $('link[title="main"]').attr('href', theme);
  if (supports_storage) {
    localStorage.theme = theme;
  }
}




/* Things to do when the page is loaded */
var supports_storage = supports_html5_storage();

/* On load, set theme from local storage */
if (supports_storage) {
  var theme = localStorage.theme;
  if (theme) {
    set_theme(theme);
  }
} else {
  /* Don't annoy user with options that don't persist */
  $('#theme-dropdown').hide();
}

//Add skill bonus update function to relevant form fields
$("[responsetype='skill']").each(function(){ 
    skillId =  $(this).attr('id');
    console.log(skillId);
    $("#" + skillId).change(function (event) {
        document.getElementById(this.id + "Bonus").value = Math.floor((parseInt(this.value) + parseInt($("#" + this.id + "Modifiers")[0].value)) / 10);
    });
});

//Add the update function to the Background selection fields
$("[responsetype='background']").each(function() {
    console.log(this.id);
    $("#" + $(this).attr('id')).change(function(event) {
        //Firstly, go through each skill modifier and reset it to zero
        console.log("Reseting modifiers");
        $("[responsetype='skillModifier']").each(function() {
            this.value = 0;
        });
        
        //Go through each of the backgrounds and re-add their modifiers
        $("[responsetype='background']").each(function() {
            console.log("Re-adding " + this.id)

            if(this.value == "(NONE)") {
                
            }
            if(this.value == "Accountant") {
                console.log('Adding accountant');
                $("#bluffModifiers")[0].value = parseInt($("#bluffModifiers")[0].value) + 10;
                $("#computerModifiers")[0].value = parseInt($("#computerModifiers")[0].value) + 10;
                $("#dodgeModifiers")[0].value = parseInt($("#dodgeModifiers")[0].value) + 10;
                $("#cultureAndLawModifiers")[0].value = parseInt($("#cultureAndLawModifiers")[0].value) + 20;
            }
            if(this.value == "Anarchist") {
                $("#dodgeModifiers")[0].value = parseInt($("#dodgeModifiers")[0].value) + 10;
                $("#fightingModifiers")[0].value = parseInt($("#fightingModifiers")[0].value) + 10;
                $("#intimidateModifiers")[0].value = parseInt($("#intimidateModifiers")[0].value) + 10;
                $("#grenadeModifiers")[0].value = parseInt($("#grenadeModifiers")[0].value) + 20;
            }
            if(this.value == "Army Trained (2 Choices)") {
                $("#dodgeModifiers")[0].value = parseInt($("#dodgeModifiers")[0].value) + 10;
                $("#energyWeaponsModifiers")[0].value = parseInt($("#energyWeaponsModifiers")[0].value) + 20;
                $("#fightingModifiers")[0].value = parseInt($("#fightingModifiers")[0].value) + 10;
                $("#grenadeModifiers")[0].value = parseInt($("#grenadeModifiers")[0].value) + 10;
                $("#heavyWeaponsModifiers")[0].value = parseInt($("#heavyWeaponsModifiers")[0].value) + 10;
                $("#kineticWeaponsModifiers")[0].value = parseInt($("#kineticWeaponsModifiers")[0].value) + 20;
                $("#medicineModifiers")[0].value = parseInt($("#medicineModifiers")[0].value) + 10;
                $("#vehicleWeaponsModifiers")[0].value = parseInt($("#vehicleWeaponsModifiers")[0].value) + 10;
            }
            if(this.value == "Borderland Homeworld") {
                $("#dodgeModifiers")[0].value = parseInt($("#dodgeModifiers")[0].value) + 10;
                $("#fightingModifiers")[0].value = parseInt($("#fightingModifiers")[0].value) + 10;
                $("#kineticWeaponsModifiers")[0].value = parseInt($("#kineticWeaponsModifiers")[0].value) + 10;
                $("#repairModifiers")[0].value = parseInt($("#repairModifiers")[0].value) + 10;
                $("#survivalModifiers")[0].value = parseInt($("#survivalModifiers")[0].value) + 10;
            }   
            if(this.value == "Born on the Streets") {
                $("#stealthModifiers")[0].value = parseInt($("#stealthModifiers")[0].value) + 10;
                $("#streetwiseModifiers")[0].value = parseInt($("#streetwiseModifiers")[0].value) + 20;
            }
            if(this.value == "Boxer") {
                $("#fightingModifiers")[0].value = parseInt($("#fightingModifiers")[0].value) + 20;
                $("#parryModifiers")[0].value = parseInt($("#parryModifiers")[0].value) + 10;
            }
            if(this.value == "Cheerleader") {
                $("#athleticsModifiers")[0].value = parseInt($("#athleticsModifiers")[0].value) + 20;
                $("#charmModifiers")[0].value = parseInt($("#charmModifiers")[0].value) + 10;
                $("#sleightOfHandModifiers")[0].value = parseInt($("#sleightOfHandModifiers")[0].value) + 10;
                $("#stealthModifiers")[0].value = parseInt($("#stealthModifiers")[0].value) + 10;
            }
            if(this.value == "Child Actor") {
                $("#bluffModifiers")[0].value = parseInt($("#bluffModifiers")[0].value) + 20;
                $("#diplomacyModifiers")[0].value = parseInt($("#diplomacyModifiers")[0].value) + 20;
                $("#meleeWeaponsModifiers")[0].value = parseInt($("#meleeWeaponsModifiers")[0].value) + 10;
            }
            if(this.value == "Community Youth Worker") {
                $("#insightModifiers")[0].value = parseInt($("#insightModifiers")[0].value) + 20;
                $("#kineticWeaponsModifiers")[0].value = parseInt($("#kineticWeaponsModifiers")[0].value) + 10;
                $("#parryModifiers")[0].value = parseInt($("#parryModifiers")[0].value) + 10;
                $("#streetwiseModifiers")[0].value = parseInt($("#streetwiseModifiers")[0].value) + 10;
            }
            if(this.value == "Computer Game Designer") {
                $("#computerModifiers")[0].value = parseInt($("#computerModifiers")[0].value) + 20;
                $("#spaceshipPilotingModifiers")[0].value = parseInt($("#spaceshipPilotingModifiers")[0].value) + 10;
                $("#tacticsModifiers")[0].value = parseInt($("#tacticsModifiers")[0].value) + 10;
                $("#vehiclePilotingModifiers")[0].value = parseInt($("#vehiclePilotingModifiers")[0].value) + 10;
            }
            if(this.value == "Criminal Family") {
                $("#bluffModifiers")[0].value = parseInt($("#bluffModifiers")[0].value) + 10;
                $("#charmModifiers")[0].value = parseInt($("#charmModifiers")[0].value) + 10;
                $("#gamblingModifiers")[0].value = parseInt($("#gamblingModifiers")[0].value) + 10;
                $("#securityModifiers")[0].value = parseInt($("#securityModifiers")[0].value) + 10;
                $("#stealthModifiers")[0].value = parseInt($("#stealthModifiers")[0].value) + 10;
            }
            if(this.value == "Cyborg") {
                
            }
            if(this.value == "Docking Bay Operative") {
                $("#navigationModifiers")[0].value = parseInt($("#navigationModifiers")[0].value) + 10;
                $("#planetaryKnowledgeModifiers")[0].value = parseInt($("#planetaryKnowledgeModifiers")[0].value) + 10;
                $("#repairModifiers")[0].value = parseInt($("#repairModifiers")[0].value) + 10;
                $("#securityModifiers")[0].value = parseInt($("#securityModifiers")[0].value) + 10;
                $("#tradingModifiers")[0].value = parseInt($("#tradingModifiers")[0].value) + 10;
            }
            if(this.value == "Engineer") {
                $("#cyberModifiers")[0].value = parseInt($("#cyberModifiers")[0].value) + 10;
                $("#computerModifiers")[0].value = parseInt($("#computerModifiers")[0].value) + 10;
                $("#energyWeaponsModifiers")[0].value = parseInt($("#energyWeaponsModifiers")[0].value) + 10;
                $("#repairModifiers")[0].value = parseInt($("#repairModifiers")[0].value) + 20;
            }
            if(this.value == "Explorer Corp") {
                $("#navigationModifiers")[0].value = parseInt($("#navigationModifiers")[0].value) + 20;
                $("#planetaryKnowledgeModifiers")[0].value = parseInt($("#planetaryKnowledgeModifiers")[0].value) + 10;
                $("#survivalModifiers")[0].value = parseInt($("#survivalModifiers")[0].value) + 10;
                $("#vehiclePilotingModifiers")[0].value = parseInt($("#vehiclePilotingModifiers")[0].value) + 10;
            }
            if(this.value == "Fighter Pilot") {
                $("#spaceshipPilotingModifiers")[0].value = parseInt($("#spaceshipPilotingModifiers")[0].value) + 10;
                $("#spaceshipWeaponsModifiers")[0].value = parseInt($("#spaceshipWeaponsModifiers")[0].value) + 10;
                $("#systemsModifiers")[0].value = parseInt($("#systemsModifiers")[0].value) + 20;
                $("#tacticsModifiers")[0].value = parseInt($("#tacticsModifiers")[0].value) + 10;
            }
            if(this.value == "Freedom Fighter") {
                $("#dodgeModifiers")[0].value = parseInt($("#dodgeModifiers")[0].value) + 10;
                $("#energyWeaponsModifiers")[0].value = parseInt($("#energyWeaponsModifiers")[0].value) + 10;
                $("#grenadeModifiers")[0].value = parseInt($("#grenadeModifiers")[0].value) + 10;
                $("#stealthModifiers")[0].value = parseInt($("#stealthModifiers")[0].value) + 10;
                $("#vehiclePilotingModifiers")[0].value = parseInt($("#vehiclePilotingModifiers")[0].value) + 10;
            }
            if(this.value == "Frontier Trader") {
                $("#bargainModifiers")[0].value = parseInt($("#bargainModifiers")[0].value) + 10;
                $("#dodgeModifiers")[0].value = parseInt($("#dodgeModifiers")[0].value) + 10;
                $("#kineticWeaponsModifiers")[0].value = parseInt($("#kineticWeaponsModifiers")[0].value) + 10;
                $("#tradingModifiers")[0].value = parseInt($("#tradingModifiers")[0].value) + 20;
            }
            if(this.value == "Fuel Rat") {
                $("#navigationModifiers")[0].value = parseInt($("#navigationModifiers")[0].value) + 20;
                $("#planetaryKnowledgeModifiers")[0].value = parseInt($("#planetaryKnowledgeModifiers")[0].value) + 10;
                $("#spaceshipPilotingModifiers")[0].value = parseInt($("#spaceshipPilotingModifiers")[0].value) + 10;
                $("#tradingModifiers")[0].value = parseInt($("#tradingModifiers")[0].value) + 10;
            }
            if(this.value == "Gene Mod Baby") {

            }
            if(this.value == "Gym Freak") {
                $("#athleticsModifiers")[0].value = parseInt($("#athleticsModifiers")[0].value) + 10;
            }
            if(this.value == "Hacker") {
                $("#computerModifiers")[0].value = parseInt($("#computerModifiers")[0].value) + 20;
                $("#securityModifiers")[0].value = parseInt($("#securityModifiers")[0].value) + 10;
            }
            if(this.value == "High Tech Homeworld") {
                $("#computerModifiers")[0].value = parseInt($("#computerModifiers")[0].value) + 10;
                $("#cyberModifiers")[0].value = parseInt($("#cyberModifiers")[0].value) + 10;
                $("#energyWeaponsModifiers")[0].value = parseInt($("#energyWeaponsModifiers")[0].value) + 10;
                $("#scienceModifiers")[0].value = parseInt($("#scienceModifiers")[0].value) + 10;
                $("#systemsModifiers")[0].value = parseInt($("#systemsModifiers")[0].value) + 10;
            }
            if(this.value == "Hoopy Casino Croupier") {
                $("#gamblingModifiers")[0].value = parseInt($("#gamblingModifiers")[0].value) + 20;
                $("#perceptionModifiers")[0].value = parseInt($("#perceptionModifiers")[0].value) + 10;
                $("#sleightOfHandModifiers")[0].value = parseInt($("#sleightofHandModifiers")[0].value) + 20;
            }
            if(this.value == "Lave Radio Host") {
                $("#bluffModifiers")[0].value = parseInt($("#bluffModifiers")[0].value) + 20;
                $("#charmModifiers")[0].value = parseInt($("#charmModifiers")[0].value) + 10;
                $("#insightModifiers")[0].value = parseInt($("#insightModifiers")[0].value) + 20;
            }
            if(this.value == "Martial Artist (2 Choices)") {
                $("#athleticsModifiers")[0].value = parseInt($("#athleticsModifiers")[0].value) + 20;
                $("#dodgeModifiers")[0].value = parseInt($("#dodgeModifiers")[0].value) + 20;
                $("#fightingModifiers")[0].value = parseInt($("#fightingModifiers")[0].value) + 20;
                $("#meleeWeaponsModifiers")[0].value = parseInt($("#meleeWeaponsModifiers")[0].value) + 20;
                $("#parryModifiers")[0].value = parseInt($("#parryModifiers")[0].value) + 20;
            }
            if(this.value == "Mercenary (2 Choices)") {
                $("#dodgeModifiers")[0].value = parseInt($("#dodgeModifiers")[0].value) + 20;
                $("#fightingModifiers")[0].value = parseInt($("#fightingModifiers")[0].value) + 10;
                $("#heavyWeaponsModifiers")[0].value = parseInt($("#heavyWeaponsModifiers")[0].value) + 20;
                $("#kineticWeaponsModifiers")[0].value = parseInt($("#kineticWeaponsModifiers")[0].value) + 10;
            }
            if(this.value == "Mining Engineer") {
                $("#grenadeModifiers")[0].value = parseInt($("#grenadeModifiers")[0].value) + 10;
                $("#heavyWeaponsModifiers")[0].value = parseInt($("#heavyWeaponsModifiers")[0].value) + 20;
                $("#repairModifiers")[0].value = parseInt($("#repairModifiers")[0].value) + 10;
                $("#systemsModifiers")[0].value = parseInt($("#systemsModifiers")[0].value) + 10;
            }
            if(this.value == "Minor Politician") {
                $("#bargainModifiers")[0].value = parseInt($("#bargainModifiers")[0].value) + 10;
                $("#cultureAndLawModifiers")[0].value = parseInt($("#cultureAndLawModifiers")[0].value) + 10;
                $("#diplomacyModifiers")[0].value = parseInt($("#diplomacyModifiers")[0].value) + 10;
                $("#perceptionModifiers")[0].value = parseInt($("#perceptionModifiers")[0].value) + 10;
                $("#tacticsModifiers")[0].value = parseInt($("#tacticsModifiers")[0].value) + 10;
            }
            if(this.value == "Monk/Nun") {
                $("#fightingModifiers")[0].value = parseInt($("#fightingModifiers")[0].value) + 10;
                $("#insightModifiers")[0].value = parseInt($("#insightModifiers")[0].value) + 20;
                $("#medicineModifiers")[0].value = parseInt($("#medicineModifiers")[0].value) + 10;
                $("#stealthModifiers")[0].value = parseInt($("#stealthModifiers")[0].value) + 10;
            }
            if(this.value == "Navy Trained (2 Choices)") {
                $("#dodgeModifiers")[0].value = parseInt($("#dodgeModifiers")[0].value) + 10;
                $("#energyWeaponsModifiers")[0].value = parseInt($("#energyWeaponsModifiers")[0].value) + 10;
                $("#fightingModifiers")[0].value = parseInt($("#fightingModifiers")[0].value) + 10;
                $("#repairModifiers")[0].value = parseInt($("#repairModifiers")[0].value) + 20;
                $("#securityModifiers")[0].value = parseInt($("#securityModifiers")[0].value) + 10;
                $("#spaceshipPilotingModifiers")[0].value = parseInt($("#spaceshipPilotingModifiers")[0].value) + 10;
                $("#spaceshipWeaponsModifiers")[0].value = parseInt($("#spaceshipWeaponsModifiers")[0].value) + 10;
                $("#systemsModifiers")[0].value = parseInt($("#systemsModifiers")[0].value) + 20;
            }
            if(this.value == "Officer") {
                $("#diplomacyModifiers")[0].value = parseInt($("#diplomacyModifiers")[0].value) + 10;
                $("#intimidateModifiers")[0].value = parseInt($("#intimidateModifiers")[0].value) + 10;
                $("#perceptionModifiers")[0].value = parseInt($("#perceptionModifiers")[0].value) + 10;
                $("#tacticsModifiers")[0].value = parseInt($("#tacticsModifiers")[0].value) + 20;
            }
            if(this.value == "Partner") {

            }
            if(this.value == "Petty Criminal") {
                $("#fightingModifiers")[0].value = parseInt($("#fightingModifiers")[0].value) + 10;
                $("#kineticWeaponsModifiers")[0].value = parseInt($("#kineticWeaponsModifiers")[0].value) + 10;
                $("#parryModifiers")[0].value = parseInt($("#parryModifiers")[0].value) + 10;
                $("#sleightOfHandModifiers")[0].value = parseInt($("#sleightOfHandModifiers")[0].value) + 10;
                $("#streetwiseModifiers")[0].value = parseInt($("#streetwiseModifiers")[0].value) + 10;
            }
            if(this.value == "Police Officer") {
                $("#cultureAndLawModifiers")[0].value = parseInt($("#cultureAndLawModifiers")[0].value) + 10;
                $("#diplomacyModifiers")[0].value = parseInt($("#diplomacyModifiers")[0].value) + 10;
                $("#dodgeModifiers")[0].value = parseInt($("#dodgeModifiers")[0].value) + 10;
                $("#energyWeaponsModifiers")[0].value = parseInt($("#energyWeaponsModifiers")[0].value) + 20;
                $("#fightingModifiers")[0].value = parseInt($("#fightingModifiers")[0].value) + 10;
                $("#perceptionModifiers")[0].value = parseInt($("#perceptionModifiers")[0].value) + 20;
                $("#spaceshipPilotingModifiers")[0].value = parseInt($("#spaceshipPilotingModifiers")[0].value) + 10;
                $("#spaceshipWeaponsModifiers")[0].value = parseInt($("#spaceshipWeaponsModifiers")[0].value) + 10;
            }
            if(this.value == "Private Detective") {
                $("#energyWeaponsModifiers")[0].value = parseInt($("#energyWeaponsModifiers")[0].value) + 10;
                $("#insightModifiers")[0].value = parseInt($("#insightModifiers")[0].value) + 10;
                $("#perceptionModifiers")[0].value = parseInt($("#perceptionModifiers")[0].value) + 10;
                $("#securityModifiers")[0].value = parseInt($("#securityModifiers")[0].value) + 10;
                $("#stealthModifiers")[0].value = parseInt($("#stealthModifiers")[0].value) + 10;
            }
            if(this.value == "Ran Away From Home") {
                $("#dodgeModifiers")[0].value = parseInt($("#dodgeModifiers")[0].value) + 10;
                $("#perceptionModifiers")[0].value = parseInt($("#perceptionModifiers")[0].value) + 10;
                $("#sleightOfHandModifiers")[0].value = parseInt($("#sleightOfHandModifiers")[0].value) + 10;
                $("#streetwiseModifiers")[0].value = parseInt($("#streetwiseModifiers")[0].value) + 10;
                $("#survivalModifiers")[0].value = parseInt($("#survivalModifiers")[0].value) + 10;
            }
            if(this.value == "Scientist") {
                $("#computerModifiers")[0].value = parseInt($("#computerModifiers")[0].value) + 10;
                $("#scienceModifiers")[0].value = parseInt($("#scienceModifiers")[0].value) + 20;
            }
            if(this.value == "Scout Leader") {
                $("#athleticsModifiers")[0].value = parseInt($("#athleticsModifiers")[0].value) + 10;
                $("#charmModifiers")[0].value = parseInt($("#charmModifiers")[0].value) + 10;
                $("#kineticWeaponsModifiers")[0].value = parseInt($("#kineticWeaponsModifiers")[0].value) + 10;
                $("#navigationModifiers")[0].value = parseInt($("#navigationModifiers")[0].value) + 10;
                $("#survivalModifiers")[0].value = parseInt($("#survivalModifiers")[0].value) + 10;
            }
            if(this.value == "Second Hand Spaceship Dealer") {
                $("#bargainModifiers")[0].value = parseInt($("#bargainModifiers")[0].value) + 20;
                $("#planetaryKnowledgeModifiers")[0].value = parseInt($("#planetaryKnowledgeModifiers")[0].value) + 10;
                $("#repairModifiers")[0].value = parseInt($("#repairModifiers")[0].value) + 10;
                $("#tradingModifiers")[0].value = parseInt($("#tradingModifiers")[0].value) + 10;
            }
            if(this.value == "Secret Agent (2 Choices)") {
                $("#bluffModifiers")[0].value = parseInt($("#bluffModifiers")[0].value) + 10;
                $("#charmModifiers")[0].value = parseInt($("#charmModifiers")[0].value) + 10;
                $("#computerModifiers")[0].value = parseInt($("#computerModifiers")[0].value) + 10;
                $("#dodgeModifiers")[0].value = parseInt($("#dodgeModifiers")[0].value) + 10;
                $("#energyWeaponsModifiers")[0].value = parseInt($("#energyWeaponsModifiers")[0].value) + 10;
                $("#insightModifiers")[0].value = parseInt($("#insightModifiers")[0].value) + 10;
                $("#securityModifiers")[0].value = parseInt($("#secutiryModifiers")[0].value) + 20;
                $("#stealthModifiers")[0].value = parseInt($("#stealthModifiers")[0].value) + 20;
            }
            if(this.value == "Self-Taught") {
                
            }
            if(this.value == "Ship Hand") {
                $("#kineticWeaponsModifiers")[0].value = parseInt($("#kineticWeaponsModifiers")[0].value) + 10;
                $("#repairModifiers")[0].value = parseInt($("#repairModifiers")[0].value) + 10;
                $("#spaceshipWeaponsModifiers")[0].value = parseInt($("#spaceshipWeaponsModifiers")[0].value) + 10;
                $("#systemsModifiers")[0].value = parseInt($("#systemsModifiers")[0].value) + 20;
            }
            if(this.value == "Sports College") {
                $("#athleticsModifiers")[0].value = parseInt($("#athleticsModifiers")[0].value) + 20;
                $("#dodgeModifiers")[0].value = parseInt($("#dodgeModifiers")[0].value) + 10;
            }
            if(this.value == "Stockbroker") {
                $("#bluffModifiers")[0].value = parseInt($("#bluffModifiers")[0].value) + 10;
                $("#fightingModifiers")[0].value = parseInt($("#fightingModifiers")[0].value) + 10;
                $("#intimidateModifiers")[0].value = parseInt($("#intimidateModifiers")[0].value) + 10;
                $("#tradingModifiers")[0].value = parseInt($("#tradingModifiers")[0].value) + 20;
            }
            if(this.value == "Teacher") {
                $("#cultureAndLawModifiers")[0].value = parseInt($("#cultureAndLawModifiers")[0].value) + 10;
                $("#diplomacyModifiers")[0].value = parseInt($("#diplomacyModifiers")[0].value) + 10;
                $("#intimidateModifiers")[0].value = parseInt($("#intimidateModifiers")[0].value) + 10;
                $("#perceptionModifiers")[0].value = parseInt($("#perceptionModifiers")[0].value) + 10;
                $("#scienceModifiers")[0].value = parseInt($("#scienceModifiers")[0].value) + 10;
            }
            if(this.value == "Trained Doctor") {
                $("#cyberModifiers")[0].value = parseInt($("#cyberModifiers")[0].value) + 20;
                $("#medicineModifiers")[0].value = parseInt($("#medicineModifiers")[0].value) + 20;
                $("#scienceModifiers")[0].value = parseInt($("#scienceModifiers")[0].value) + 10;
            }
            if(this.value == "Treasure Hunter") {
                $("#fightingModifiers")[0].value = parseInt($("#fightingModifiers")[0].value) + 10;
                $("#kineticWeaponsModifiers")[0].value = parseInt($("#kineticWeaponsModifiers")[0].value) + 10;
                $("#navigationModifiers")[0].value = parseInt($("#navigationModifiers")[0].value) + 10;
                $("#planetaryKnowledgeModifiers")[0].value = parseInt($("#planetaryKnowledgeModifiers")[0].value) + 10;
                $("#vehiclePilotingModifiers")[0].value = parseInt($("#vehiclePilotingModifiers")[0].value) + 10;
            }
            if(this.value == "Trucker") {
                $("#tradingModifiers")[0].value = parseInt($("#tradingModifiers")[0].value) + 10;
                $("#vehiclePilotingModifiers")[0].value = parseInt($("#vehiclePilotingModifiers")[0].value) + 10;
                $("#vehicleWeaponsModifiers")[0].value = parseInt($("#vehicleWeaponsModifiers")[0].value) + 10;
            }
            if(this.value == "University Graduate") {
                
            }
            if(this.value == "Vehicle Nut") {
                $("#repairModifiers")[0].value = parseInt($("#repairModifiers")[0].value) + 10;
                $("#vehiclePilotingModifiers")[0].value = parseInt($("#vehiclePilotingModifiers")[0].value) + 20;
                $("#vehicleWeaponsModifiers")[0].value = parseInt($("#vehicleWeaponsModifiers")[0].value) + 20;
            }
            if(this.value == "Wise Guy (2 Chocies)") {
                $("#dodgeModifiers")[0].value = parseInt($("#dodgeModifiers")[0].value) + 10;
                $("#gamblingModifiers")[0].value = parseInt($("#gamblingModifiers")[0].value) + 10;
                $("#heavyWeaponsModifiers")[0].value = parseInt($("#heavyWeaponsModifiers")[0].value) + 10;
                $("#kineticWeaponsModifiers")[0].value = parseInt($("#kineticWeaponsModifiers")[0].value) + 10;
                $("#medicineModifiers")[0].value = parseInt($("#medicineModifiers")[0].value) + 10;
                $("#meleeWeaponsModifiers")[0].value = parseInt($("#meleeWeaponsModifiers")[0].value) + 10;
                $("#streetwiseModifiers")[0].value = parseInt($("#streetwiseModifiers")[0].value) + 20;
                $("#tacticsModifiers")[0].value = parseInt($("#tacticsModifiers")[0].value) + 10;
                $("#vehicleWeaponsModifiers")[0].value = parseInt($("#vehicleWeaponsModifiers")[0].value) + 10;
            }
        });
        
        $("[responsetype='skill']").each(function(){ 
            document.getElementById(this.id + "Bonus").value = Math.floor((parseInt(this.value) + parseInt($("#" + this.id + "Modifiers")[0].value)) / 10);
        });
    });
});