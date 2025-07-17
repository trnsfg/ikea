
export function LoginForm(){
    return(
        <div className="login-form-conteiner">
            <form>
                <p>
                    Електронна пошта або мобільний номер
                </p>
                <input type='email'/>
                <p className="little-grey-text">
                    By entering your mobile number and one-time code sign-in option, you agree to receive a one-time verification code via SMS from IKEA. Message and data rates may apply. More info about Privacy Policy
                </p>
                <p>Пароль</p>
                <input type='password'/>
                <p>Забули свій пароль?</p>
                <label  className="grey-text label">
                    <input type='checkbox' className="checkbox"/>
                    Зберегти інформацію
                    <img src="./Vector3.png"></img>
                </label>
                <button className="black-btn">Продовжити</button>
                <b>У вас ще немає облікового запису? Створіть його:</b>
                <button className="white-btn">Створити аккаунт</button>
            </form>
        </div>
    )
}