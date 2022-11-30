<form action="">
    <h1>Sign Up</h1>
    <label>
        <p>Username</p>
        <input type="text" name="name" placeholder="John Doe" />
    </label>
    <label>
        <p>Email ID</p>
        <input type="email" name="email" placeholder="john.doe@gmail.com" />
    </label>
    <label>
        <p>Password</p>
        <input type="password" name="password" id="********">
    </label>
    <button type="submit">Create Account</button>
</form>

<style lang="scss">
    p{
        font-size: 18px;
        font-weight: bold;
    }
    input{
        background-color: var(--blueLight);
        height: 40px;
        border-radius: 4px;
        padding: 20px 0;
        &::placeholder{
            color: rgba($color: #000000, $alpha: 0.6);
        }
    }
</style>