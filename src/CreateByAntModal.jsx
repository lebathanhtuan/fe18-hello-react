import { Form, Input, Button, Checkbox, InputNumber } from 'antd';

function CreateByAntModal(props) {
  const {
    changeFormValue,
    createFormValues,
    createFormErrors,
  } = props;
  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{ agree: false }}
      onFinish={(values) => console.log(values)}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          { required: true, message: 'Bạn chưa nhập tên!' },
          { max: 50, message: 'Không được vượt quá 50 kí tự!' },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Bạn chưa nhập giá' }]}
      >
        <InputNumber
          formatter={value => `VND ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\VND\s?|(,*)/g, '')}
          style={{ width: '100%' }}
        />
      </Form.Item>

      <Form.Item name="agree" valuePropName="checked">
        <Checkbox>Agree</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CreateByAntModal;
