
{
    // 1. "janob " va "xonim" manosini qoshib qaytaring
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
        console.log(`janob ${value.name}`);
      } else {
        console.log(`xonim ${value.name}`);
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
    
      console.log(card("29381209809123", true));
      console.log(card("29381209809123", false));
}

