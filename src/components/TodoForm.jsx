import { Formik, ErrorMessage } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().trim().required("Title is required"),
  description: Yup.string().trim().required("Description is required"),
});

const TodoForm = ({ createTodoItems, setIsLoading }) => {
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setIsLoading(true);
        resetForm();

        setTimeout(() => {
          setIsLoading(false);
          createTodoItems({ ...values });
          setSubmitting(false);
        }, 500);
      }}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        handleBlur,
        isSubmitting,
        errors,
        touched,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="todoFormTitle">
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              required
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter task title"
              isValid={touched.title && !errors.title}
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
            <ErrorMessage
              name="title"
              component="div"
              className="text-danger"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="todoFormDescription">
            <Form.Label>Task Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              type="text"
              required
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter task description"
              style={{ height: "200px" }}
              isValid={touched.description && !errors.description}
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
            <ErrorMessage
              name="description"
              component="div"
              className="text-danger"
            />
          </Form.Group>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add Task"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

TodoForm.propTypes = {
  createTodoItems: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};

export default TodoForm;
