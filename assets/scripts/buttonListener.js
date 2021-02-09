// (Base ATK * (1 + ATK%) + FLAT ATK)
//*(1 + Corresponding Dmg Bonus%)
//*(Skill Multiplier)*[(100+Character Level)/((100+Character Level) + (100+Enemy Level)*Defence drop)]
//*(1 - Corresponding Enemy RES%)

const form = document.querySelector('#form');

form.addEventListener('submit', handleSubmit);


function handleSubmit(event) {
    event.preventDefault();
    console.log('submitted');

    const b5 = getInputNumberValue('DbaseP');
    console.log(b5)

    const b6 = getInputNumberValue('DbaseA');
    console.log(b6)

    const b7 = getInputNumberValue('FlatAtk');
    console.log(b7)

    const b8 = getInputNumberValue('perAtk');
    console.log(b8)

    const b9 = getInputNumberValue('perAtkAr');
    console.log(b9)

    const b10 = getInputNumberValue('atkPassiva');
    console.log(b10)

    const b11 = getInputNumberValue('ElementalDmg');
    console.log(b10)

    const b12 = getInputNumberValue('critDmg');
    console.log(b12)

    const b13 = getInputNumberValue('txCrit');
    console.log(b13)

    const b14 = getInputNumberValue('skillMtp');
    console.log(b14)

    const b15 = getInputNumberValue('level')
    console.log(b15)

    const b16 = getInputNumberValue('enemyLevel');
    console.log(b16)

    const b17 = getInputNumberValue('defReduce');
    console.log(b17)

    const b18 = getInputNumberValue('resEnemy');
    console.log(b18)

    const b21 = getSelectedValue('reactionMltp');
    console.log(b21)

    const b22 = getInputNumberValue('profi');
    console.log(b22)



    const finaldamage = ((b5+b6)*(1+(b8+b9+b10)/100)+b7)*(1+b11/100)*b14/100*((100+b15)/((100+b15)+(100+b16)*(1-b17/100)))*(1-b18/100);
    const finaldamageCrit = Math.floor(finaldamage*(1+b12/100))
    const reactionDmg = Math.floor((finaldamage*b21*(1+b22/100)));
    const reactionCritDmg = Math.floor((finaldamageCrit*b21*(1+b22/100)));
    
;
    const layout = `<h2>Aqui está o resultado:</h2>
    <div class="result-content">
      <ul>
        <li>
          O dano final é <strong>${Math.floor(finaldamage)}</strong>.
        </li>
        <li>
          O dano final com crítico é  <strong>${finaldamageCrit}</strong>.
        </li>
        <li>
          O dano da reaçao é  <strong>${reactionDmg}</strong>.
        </li>
        <li>
          O dano da reação com crítico é <strong>${reactionCritDmg}</strong>.
        </li>
      </ul>
    </div>`

    const result = document.querySelector('#result');
    result.innerHTML = layout;
}

function getInputNumberValue(id) {
    return Number(document.getElementById(id).value);
}

function getSelectedValue(id) {
    const select = document.getElementById(id);
    return Number(select.options[select.selectedIndex].value);
}