describe ("Fail post requests", () => {
  // Создание пользователя c ошибкой, логин уже используется
  it ("Fail login test", async () => {
    const responseFailCreateLogin = await fetch ('https://bookstore.demoqa.com/Account/v1/User', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "userName": "string",
        "password": "AHJwh2asda12A323ss23@adsd22237512E23221106@@"
      })
    }) 
    const dataFailCreateLogin = await responseFailCreateLogin.json()
    console.log(responseFailCreateLogin.status)
    console.log(dataFailCreateLogin)
  })
  //Создание пользователя c ошибкой, пароль не подходит
  it ("Fail password test", async () => {
    const responseFailCreatePass = await fetch ('https://bookstore.demoqa.com/Account/v1/User', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "userName": "AHJwh2323ss2E23221123Aadsasd2SDAsssssssa106kfgjJJ",
        "password": "string"
      })
    }) 
    const dataFailCreatePass = await responseFailCreatePass.json()
    console.log(responseFailCreatePass.status)
    console.log(dataFailCreatePass)
  })
  // Генерация токена c ошибкой
  it ("Generate token fail", async() => {
    const responseFailGenerateToken = await fetch ('https://bookstore.demoqa.com/Account/v1/GenerateToken', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify ({
        "userName": "",
        "password": "string"
      })
    })
    const dataFailGenerateToken = await responseFailGenerateToken.json();
    console.log(responseFailGenerateToken.status)
    console.log(dataFailGenerateToken)
  })
})


describe("Success POST requests", () => {
  // Создание пользователя успешно

  it("User create success", async() => {
    const responseSuccessUserCreate = await fetch ('https://bookstore.demoqa.com/Account/v1/User', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify ({
        "userName": "JOhhhhgthreu37hhdju389aDAww22131sad225AdasdasdAAsdkr74djkmg",
        "password": "IOWYfriu3g47adsAAASDAWWW2@@adasdQA812nfdjh7@@@2"
      })
    });
      const dataSuccessUserCreate = await responseSuccessUserCreate.json();
      console.log(responseSuccessUserCreate.status)
      console.log(dataSuccessUserCreate)
  })
  // Генерация токена успешно
  it ("Success token create", async ()=> {
    const responseSuccessTokenCreate = await fetch ('https://bookstore.demoqa.com/Account/v1/GenerateToken', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify ({
        "userName": "JOhhhhgthreu3ADdasdasdasdasdQW231333gkliojvgkjrejjr74djkmg",
        "password": "IAIKWRH%*(#@^&$hvasdasdjreht89adsasd47hdju2323jjhjdh"
      })
    })
    const dataSuccessTokenCreate = await responseSuccessTokenCreate.json();
    console.log(responseSuccessTokenCreate.status)
    console.log(dataSuccessTokenCreate)
  })
})