/*
    function handleSubmit(event){
        event.preventDefault()
        const formEl=event.currentTarget
        const formData=new FormData(formEl)
        const email=formData.get("email")
        console.log(email)
        formEl.reset()
    }
    */
export default function Forms() {
  function signUp(formData) {
    /*
    to get all the data from fonts use data=Oject.fromEntries(formData) but for checkboxes which has mutliple options 
    to choose do in separate way like formData.getAll()
    to merge both use const allData={
        ...data,
        checkboxesData,
    }
    */
    const email = formData.get("email");
    const pass = formData.get("password");
    const status = formData.get("employmentStatus");

    console.log(email);
    console.log(pass);
    console.log(status)
  }
  //for checkboxes we need do formData.getAll as we will select multiple options
  //without giving value to radio it gets "on" when we want to get the radio data 
  //we need to give the value that we require to get when we choose radio 
  return (
    <section>
      <h1>Sign Up</h1>
      <form action={signUp}>
        <label htmlFor="email">Email: </label>
        <input id="email" type="email" name="email" placeholder="Email"></input>
        <br />
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" name="password" />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea id="description" name="description"></textarea>
        <br />
        <fieldset>
          <legend>Employment Status</legend>
          <label>
            <input type="radio" name="employmentStatus" value="Employed" />
            Employed
          </label>
          <br/>
          <label>
            <input type="radio" name="employmentStatus" value="Part-time" />
            Part-time
          </label>
          <br/>
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value="Full-time" />
            Full-time
          </label>
        </fieldset>
        <br />
        <button>Submit</button>
      </form>
    </section>
  );
}
