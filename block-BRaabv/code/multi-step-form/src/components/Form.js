function Form(props) {
  let index = props.index;
  switch (index) {
    case 0:
      return (
        <div className="form1 form-section flex">
          <div className="formfield flex-48">
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" />
          </div>
          <div className="formfield flex-48">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname" />
          </div>
          <div className="formfield flex-48">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" name="dob" id="dob" />
          </div>
          <div className="formfield flex-48">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="formfield">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" />
          </div>
        </div>
      );

    case 1:
      return (
        <div className="form2 form-section">
          <label htmlFor="message">Message</label>  
          <textarea id="message"></textarea>
          <input type="radio" name="choice1" id="choice1" />
          <label htmlFor="choice1">Choice 1</label>
          <input type="radio" name="choice2" id="choice2" />
          <label htmlFor="choice2">Choice 2</label>
        </div>
      );

    case 2:
      return (
        <div className="form3 form-section">
          <input type="checkbox" name="" id="cb1" />
          <label htmlFor="cb1"></label>
          <input type="checkbox" name="" id="cb2" />
          <label htmlFor="cb2"></label>
          <div className="radioButton">
            <input type="radio" name="radio" id="radio1" />
            <label htmlFor="radio1">I want to add this option.</label>
          </div>
          <div className="radioButton">
            <input type="radio" name="radio" id="radio2" />
            <label htmlFor="radio2">
              Let me click on this checkbox and choose some cool stuff.
            </label>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default Form;
