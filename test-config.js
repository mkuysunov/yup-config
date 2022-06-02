yup.setLocale({
  string: {
    default: JSON.stringify({
      id: "form.error.string.default",
      defaultMessage: "This value is invalid",
      values: { path: "${path}" },
    }),
    email: JSON.stringify({
      id: "form.error.string.email",
      defaultMessage: "This must be an email address",
      values: { path: "${path}" },
    }),
    min: JSON.stringify({
      id: "form.error.string.min",
      defaultMessage: "Minimum length is {min}",
      values: { path: "${path}", min: "${min}" },
    }),
  },
  mixed: {
    required: JSON.stringify({
      id: "form.error.required",
      defaultMessage: "This field is required",
      values: { path: "${path}" },
    }),
  },
});

yup.addMethod(yup.string, "equalTo", (ref, msg) =>
  yup.mixed().test({
    name: "equalTo",
    exclusive: false,
    message:
      msg ||
      JSON.stringify({
        id: "form.error.string.equal-to",
        defaultMessage: "Field {path} must be equal to {reference}",
        values: { path: "${path}", reference: "${reference}" },
      }),
    params: {
      reference: ref.path,
    },
    test: function (value) {
      return value === this.resolve(ref);
    },
  })
);
