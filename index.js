let k = 0;
let c = 0;
let coffee = "";
let KubArab = 0;
let Sugar = 0;
let kA = "";
let Sug = "";
let WithMilk = "";
let smailBig = "";

while (k == 0) {
  const kava = prompt(
    "Яку каву ви бажаєте? (американо, американо з молоком, капучіно, лате)"
  );
  if (kava == "Американо" || kava == "американо") {
    console.log("Американо");
    k++;
    coffee = "американо";
  } else if (kava == "Американо з молоком" || kava == "американо з молоком") {
    console.log("Американо з молоком");
    k++;
    coffee = "американо з молоком";
  } else if (kava == "Капучіно" || kava == "капучіно") {
    console.log("Капучіно");
    k++;
    coffee = "капучіно";
  } else if (kava == "Лате" || kava == "лате") {
    console.log("Лате");
    k++;
    coffee = "лате";
  }
}

if (coffee == "американо з молоком") {
  while (c == 0) {
    const AmerikanoWithMilk = prompt("З вершками чи з молоком?");
    if (
      AmerikanoWithMilk == "З вершками" ||
      AmerikanoWithMilk == "з вершками"
    ) {
      console.log("З вершками");
      c++;
      WithMilk = "з вершками";
    } else if (
      AmerikanoWithMilk == "З молоком" ||
      AmerikanoWithMilk == "з молоком"
    ) {
      console.log("З молоком");
      c++;
      WithMilk = "з молоком";
    }
  }
}
if (coffee == "капучіно" || coffee == "лате") {
  while (c == 0) {
    const SmallOrLarge = prompt("Маленький чи великий?");
    if (SmallOrLarge == "Маленький" || SmallOrLarge == "маленький") {
      console.log("Маленький");
      c++;
      smailBig = "маленька";
    } else if (SmallOrLarge == "Великий" || SmallOrLarge == "великий") {
      console.log("Великий");
      c++;
      smailBig = "велика";
    }
  }
}

while (KubArab == 0) {
  const KubashOrArabica = prompt("Кубаш чи арабіка?");
  if (KubashOrArabica == "Кубаш" || KubashOrArabica == "кубаш") {
    console.log("Кубаш");
    KubArab++;
    kA = "кубаш";
  } else if (KubashOrArabica == "Арабіка" || KubashOrArabica == "арабіка") {
    console.log("Арабіка");
    KubArab++;
    kA = "арабіка";
  }
}

while (Sugar == 0) {
  const HowMuchSugar = prompt("Скільки цукру?");
  if (
    HowMuchSugar == 0 ||
    HowMuchSugar == 1 ||
    HowMuchSugar == 2 ||
    HowMuchSugar == 3 ||
    HowMuchSugar == 4 ||
    HowMuchSugar == 5 ||
    HowMuchSugar == 6 ||
    HowMuchSugar == 7 ||
    HowMuchSugar == 8 ||
    HowMuchSugar == 9 ||
    HowMuchSugar == 10
  ) {
    console.log(HowMuchSugar);
    Sugar++;
    Sug = HowMuchSugar;
  }
}

if (coffee == "американо") {
  console.log(
    `Ось ваше замовлення: кава ${coffee} - ${kA}, ${Sug} ложок цукру`
  );
} else if (coffee == "американо з молоком") {
  console.log(
    `Ось ваше замовлення: кава ${coffee} - ${WithMilk}, ${kA}, ${Sug} ложок цукру`
  );
} else if (coffee == "капучіно" || coffee == "лате") {
  console.log(
    `Ось ваше замовлення: кава ${coffee} - ${smailBig}, ${kA}, ${Sug} ложок цукру`
  );
}

