
{
    // 1 "janob " va "xonim" manosini qoshib qaytaring
    const mrMs = [
      {
        name: "Akmal",
        gender: "male",
      },
      {
        name: "Laylo",
        gender: "female",
      },
      {
        name: "Ozod",
        gender: "male",
      },
      {
        name: "Aisha",
        gender: "female",
      },
   ];
    for (let value of mrMs) {
      if (value.gender === "male") {
        // console.log(`janob ${value.name}`);
      } else {
        // console.log(`xonim ${value.name}`);
      }
    }
}

{
    // 2 agar ikkinchi argument false bo'lsa carta raqami yashirilsin aks holda aksi
    function card(num, bool) {
        if (bool === false) {
          num = num.slice(0, 4) + "*******";
        }
        console.log(num);
      }
    
    //   console.log(card("9860012106407476", true));
    //   console.log(card("9860012106407476", false));
}

{
    // 3 perimetrini qaytaradigan function tuzing
    function perimetrRect(a, b){
        return 2 * (a + b);
    }
    // console.log(perimetrRect(6, 6));
}
{
    // 4 masala "Ha" ga true "Yo'q" ga false qaytaring faqat arrow functionda bir qatorda
    const haYoq = (str) =>
        str === "Ha" ? console.log(true) : console.log(false);
    
    //   console.log(haYoq("Ha"));
    //   console.log(haYoq("Yo'q"));
}


{
    // 5 agar + bo'lmasa telni raqamiga + qo'shib qaytaring
    function tell(n) {
        console.log(n.replace(n, `+${n}`));
      }
    //   console.log(tell("998994310529"));
}

{
    // 6 declarition functionni arraw functionga o'giring va bir qatorda yozing
    {
        const hi = () => "Hello world";
    
        // console.log(hi());
    }
}

{
    // 7 "dark " kiritsa "light " ni qaytaring yoki aksi
    const brightness = (str) =>
        str === "light" ? console.log("dark") : console.log("light");
    
      console.log(brightness("light"));
      console.log(brightness("dark"));
}

