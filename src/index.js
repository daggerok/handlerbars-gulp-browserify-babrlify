import Person from './modules/Person'
import $ from 'jquery'
import Handlebars from 'handlebars'

let 
name = 'Max',
person = new Person(name),
values = {
  name,
  person
},
src = 
`<div>
  <h4>{{name}}?</h4>
  {{#with person}}
    <div class="person">
      {{hi}}
    </div>
  {{/with}}
</div>`,
template = Handlebars.compile(src)

const append = (content) => $('#content').append(content)
append(template(values))

$.get('views/test.html', (data) => {
  template = Handlebars.compile(data)
  append(template(values))
})