export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (PascalCase):'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.jsx',
        templateFile: 'plop-templates/component/component.jsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.styles.css',
        templateFile: 'plop-templates/component/component.styles.css.hbs'
      }
    ]
  });
}
