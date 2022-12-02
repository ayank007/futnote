<div class="themeController">
    <div class="themeDiv">
        <h6>Theme</h6>
        <label>
            <p>
                Light Mode
            </p>
            <input type="radio" name="theme" value="light" checked>
        </label>
        <label>
            <p>Dark Mode</p>
            <input type="radio" name="theme" value="dark">
        </label>
    </div>
    <div class="langDiv">
        <h6>Language</h6>
        <label>
            <p>
                English
            </p>
            <input type="radio" name="lang" value="english" checked>
        </label>
        <label>
            <p class="font-medium">
                বাংলা
            </p>
            <input type="radio" name="lang" value="bengali">
        </label>
        <label>
            <p>
                Deutsch
            </p>
            <input type="radio" name="lang" value="german">
        </label>
        <label>
            <p class="font-medium">
                हिन्दी
            </p>
            <input type="radio" name="lang" value="hindi">
        </label>
        <label>
            <p>
                Italiano
            </p>
            <input type="radio" name="lang" value="italian">
        </label>
        <label>
            <p class="font-medium">
                日本語
            </p>
            <input type="radio" name="lang" value="japanese">
        </label>
        <label>
            <p>
                Portugues
            </p>
            <input type="radio" name="lang" value="portuguese">
        </label>
        <label>
            <p>
                Española
            </p>
            <input type="radio" name="lang" value="spanish">
        </label>
    </div>
</div>

<style lang="scss">
    .themeController{
        > div{
            padding: 30px 0;
        }
        h6{
            font-size: 25px;
            font-weight: bolder;
            margin-bottom: 10px;
            margin-left: 30px;
        }
        label{
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;
            transition: 0.3s;
            font-size: 16px;
            font-weight: 400;
            padding: 0 30px;
            &:hover{
                background-color: rgba(0,0,0,0.1);
            }
        }
        .themeDiv{
            border-bottom: 1px solid rgba(0,0,0,0.2);
        }
    }

    input[type="radio"] {
        cursor: pointer;
        appearance: none;
        background: transparent;
        margin: 0;
        font: inherit;
        color: var(--themeGreen);
        width: 1.2em;
        height: 1.2em;
        border: 0.15em solid var(--themeGreen);
        border-radius: 50%;
        transform: translateY(-0.075em);
        display: grid;
        place-content: center;
    }

    input[type="radio"]::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--themeGreen);
    }

    input[type="radio"]:checked::before {
        transform: scale(1);
    }
</style>