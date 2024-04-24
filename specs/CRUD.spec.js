describe ("Fail POST requests", () => {
  // Создание пользователя c ошибкой, логин уже используется
  it ("Fail login test", async () => {
    const responseFailCreateLogin = await fetch ('https://bookstore.demoqa.com/Account/v1/User', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "userName": "string",
        "password": "AHJwh2asda12A323ss23@adsd212237512E23221106@@"
      })
    }) 
    const dataFailCreateLogin = await responseFailCreateLogin.json()
    expect(responseFailCreateLogin.status).toBe(406)
    console.log(responseFailCreateLogin.status)
    console.log(dataFailCreateLogin)
  })
  //Создание пользователя c ошибкой, пароль не подходит
  it ("Fail password test", async () => {
    const responseFailCreatePass = await fetch ('https://bookstore.demoqa.com/Account/v1/User', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "userName": "AHJwh2323ss2E232211123Aadsasd2SDAsssssssa106kfgjJJ",
        "password": "string"
      })
    }) 
    const dataFailCreatePass = await responseFailCreatePass.json()
    expect(responseFailCreatePass.status).toBe(400)
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
    expect(responseFailGenerateToken.status).toBe(400)
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
        "userName": "JOhhhhgthreu37hhdju389aDAww2212111213asd21212s1ad12221215Adaasdsdasd1AAsdkr74djkmg",
        "password": "IOWYfriu3g47adsAAASDAWWW2@@ad1as121222dsad2311QA81211ssaSnasdf1djh7@@@2"
      })
    });
      const dataSuccessUserCreate = await responseSuccessUserCreate.json();

      const etalon = {
        userID: dataSuccessUserCreate.userID,
        username: dataSuccessUserCreate.username,
        books: dataSuccessUserCreate.books
      }
      expect(dataSuccessUserCreate).toEqual(etalon)
      expect(responseSuccessUserCreate.status).toBe(201)
      console.log(responseSuccessUserCreate.status)
      console.log(dataSuccessUserCreate)
  })
  // Генерация токена успешно
  it ("Success token create", async ()=> {
    const responseSuccessTokenCreate = await fetch ('https://bookstore.demoqa.com/Account/v1/GenerateToken', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify ({
        "userName": "JOhhhhgthreu3ADdasda1sdasdasd1QW2ads131333gk11l13232123d1siojv2gkjsdarejjr74djkmg",
        "password": "IAIKWRH%*1(#@^&$hvasdasdjreht81adas1dsas1d11247h12321dsa223ddasju2323jjhjdh"
      })
    })
    
    const dataSuccessTokenCreate = await responseSuccessTokenCreate.json();
    const etalon = {token: null,
       expires: null, 
       status: 'Failed', 
       result: 'User authorization failed.'
      }
    expect (dataSuccessTokenCreate).toEqual(etalon)
    expect(responseSuccessTokenCreate.status).toBe(200)
    console.log(responseSuccessTokenCreate.status)
    console.log(dataSuccessTokenCreate)
  })
})


