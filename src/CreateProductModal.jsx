import {
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

function CreateProductModal(props) {
  const {
    changeFormValue,
    createFormValues,
    createFormErrors,
  } = props;
  return (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Product name"
          onChange={(e) => changeFormValue(e)}
          value={createFormValues.name}
        />
      </FormGroup>
      {createFormErrors.name &&
        <p className="text-danger">{createFormErrors.name}</p>
      }
      <FormGroup>
        <Label for="price">Price</Label>
        <Input
          type="text"
          name="price"
          id="price"
          placeholder="Product price"
          onChange={(e) => changeFormValue(e)}
          value={createFormValues.price}
        />
      </FormGroup>
      {createFormErrors.price &&
        <p className="text-danger">{createFormErrors.price}</p>
      }
      <FormGroup>
        <Label for="gender">Gender</Label>
        <Input
          type="select"
          name="gender"
          id="gender"
          onChange={(e) => changeFormValue(e)}
          value={createFormValues.gender}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Input>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="radio"
            name="choice"
            onChange={(e) => changeFormValue(e)}
            value="1"
          />{' '}
          Choice 1
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="radio"
            name="choice"
            onChange={(e) => changeFormValue(e)}
            value="2"
          />{' '}
          Choice 2
        </Label>
      </FormGroup>
      Question...
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="answers"
            onChange={(e) => changeFormValue(e)}
            value="A"
          />{' '}
          A
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="answers"
            onChange={(e) => changeFormValue(e)}
            value="B"
          />{' '}
          B
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="answers"
            onChange={(e) => changeFormValue(e)}
            value="C"
          />{' '}
          C
        </Label>
      </FormGroup>
      {createFormErrors.answers &&
        <p className="text-danger">{createFormErrors.answers}</p>
      }
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="agree"
            onChange={(e) => changeFormValue(e)}
          />{' '}
          I agree
        </Label>
      </FormGroup>
      {createFormErrors.agree &&
        <p className="text-danger">{createFormErrors.agree}</p>
      }
    </Form>
  );
}

export default CreateProductModal;
