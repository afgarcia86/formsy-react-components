(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _formsyReactComponents = require('formsy-react-components');

var _formsyReactComponents2 = _interopRequireDefault(_formsyReactComponents);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = _formsyReactComponents2.default.Checkbox;
var CheckboxGroup = _formsyReactComponents2.default.CheckboxGroup;
var Input = _formsyReactComponents2.default.Input;
var RadioGroup = _formsyReactComponents2.default.RadioGroup;
var Row = _formsyReactComponents2.default.Row;
var Select = _formsyReactComponents2.default.Select;
var File = _formsyReactComponents2.default.File;
var Textarea = _formsyReactComponents2.default.Textarea;


var MyForm = _react2.default.createClass({
    displayName: 'MyForm',


    mixins: [_formsyReactComponents2.default.ParentContextMixin],

    render: function render() {
        return _react2.default.createElement(
            _formsyReact2.default.Form,
            _extends({
                className: this.getLayoutClassName()
            }, this.props, {
                ref: 'formsy'
            }),
            this.props.children
        );
    }
});

var Playground = function (_React$Component) {
    _inherits(Playground, _React$Component);

    function Playground(props) {
        _classCallCheck(this, Playground);

        // Default state

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Playground).call(this, props));

        _this.state = {
            layout: 'horizontal',
            validatePristine: false,
            disabled: false
        };

        // Bind this
        _this.changeOption = _this.changeOption.bind(_this);
        _this.submitForm = _this.submitForm.bind(_this);
        _this.resetForm = _this.resetForm.bind(_this);
        return _this;
    }

    _createClass(Playground, [{
        key: 'resetForm',
        value: function resetForm() {
            // This is nasty
            var formsy = this.refs.myform.refs.formsy;
            formsy.reset();
        }
    }, {
        key: 'submitForm',
        value: function submitForm(data) {
            console.log(this, data);
        }
    }, {
        key: 'changeOption',
        value: function changeOption(name, value) {
            var newState = {};
            newState[name] = value;
            this.setState(newState);
        }
    }, {
        key: 'render',
        value: function render() {

            var radioOptions = [{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B' }, { value: 'c', label: 'Option C' }];

            var radioOptionsDisabled = [{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B', disabled: true }, { value: 'c', label: 'Option C' }];

            var optionY = {
                value: 'y',
                label: 'Option Y (yellow css class)',
                className: 'yellow'
            };
            optionY['data-note'] = 'This is a data attribute.';
            var selectOptions = [{ value: 'a', label: 'Option A' }, { value: 'a', label: 'Option A (again)' }, { value: 'b', label: 'Option B' }, { value: 'c', label: 'Option C' }, { value: 'd', label: 'Option D', disabled: true }, optionY];

            var singleSelectOptions = selectOptions.slice(0);
            singleSelectOptions.unshift({ value: '', label: 'Please select…' });

            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'page-header' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Form Playground  (Bootstrap v4)'
                    )
                ),
                _react2.default.createElement(
                    'h3',
                    null,
                    'Options…'
                ),
                _react2.default.createElement(_options2.default, {
                    layoutChoice: this.state.layout,
                    validatePristineChoice: this.state.validatePristine,
                    disabledChoice: this.state.disabled,
                    changeOption: this.changeOption
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'page-header' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Layout: ',
                        _react2.default.createElement(
                            'code',
                            null,
                            this.state.layout
                        )
                    )
                ),
                _react2.default.createElement(
                    MyForm,
                    {
                        onSubmit: this.submitForm,
                        layout: this.state.layout,
                        validatePristine: this.state.validatePristine,
                        disabled: this.state.disabled,
                        ref: 'myform'
                    },
                    _react2.default.createElement(
                        'fieldset',
                        null,
                        _react2.default.createElement(
                            'legend',
                            null,
                            'Input types'
                        ),
                        _react2.default.createElement(Input, {
                            name: 'secret',
                            value: 'I\'m hidden!',
                            type: 'hidden'
                        }),
                        _react2.default.createElement(Input, {
                            name: 'text1',
                            id: 'artisanCraftedBespokeId',
                            value: '',
                            label: 'Text',
                            type: 'text',
                            placeholder: 'Here is a text input.',
                            help: 'This is a required text input.',
                            required: true
                        }),
                        _react2.default.createElement(Input, {
                            name: 'date[0]',
                            value: '',
                            label: 'Date',
                            type: 'date',
                            placeholder: 'This is a date input.',
                            required: true
                        }),
                        _react2.default.createElement(Input, {
                            name: 'email',
                            value: '',
                            label: 'Email',
                            type: 'email',
                            autoComplete: 'off',
                            placeholder: 'This is an email input.',
                            help: 'This email field should not autocomplete.',
                            validations: 'isEmail',
                            validationErrors: {
                                isEmail: 'This doesn’t look like a valid email address.'
                            },
                            required: true
                        }),
                        _react2.default.createElement(Input, {
                            name: 'password1',
                            value: '',
                            label: 'Password',
                            type: 'password',
                            validations: 'minLength:8',
                            validationError: 'Your password must be at least 8 characters long.',
                            placeholder: 'Choose a password'
                        }),
                        _react2.default.createElement(Input, {
                            name: 'password2',
                            value: '',
                            label: 'Confirm password',
                            type: 'password',
                            validations: 'equalsField:password1',
                            validationErrors: {
                                equalsField: 'Passwords must match.'
                            },
                            placeholder: 'Retype password'
                        }),
                        _react2.default.createElement(Input, {
                            type: 'color',
                            name: 'colour1',
                            label: 'Colour input',
                            value: '#000000',
                            validations: 'equals:#000000',
                            validationError: 'You can have any color, as long as it\'s black.'
                        }),
                        _react2.default.createElement(Input, {
                            type: 'range',
                            name: 'range1',
                            label: 'Range input',
                            min: 0,
                            max: 10,
                            step: 2
                        }),
                        _react2.default.createElement(File, {
                            name: 'file1',
                            label: 'File picker',
                            help: 'Warning: this returns a FileList that will need custom coding to be useful.',
                            multiple: true
                        })
                    ),
                    _react2.default.createElement(
                        'fieldset',
                        null,
                        _react2.default.createElement(
                            'legend',
                            null,
                            'Textarea'
                        ),
                        _react2.default.createElement(Textarea, {
                            rows: 3,
                            cols: 40,
                            name: 'txtArea1',
                            label: 'Textarea',
                            placeholder: 'This field requires 10 characters.',
                            help: 'This is some help text for the textarea.',
                            validations: 'minLength:10',
                            validationErrors: {
                                minLength: 'Please provide at least 10 characters.'
                            }
                        })
                    ),
                    _react2.default.createElement(
                        'fieldset',
                        null,
                        _react2.default.createElement(
                            'legend',
                            null,
                            'Select'
                        ),
                        _react2.default.createElement(Select, {
                            name: 'select1',
                            label: 'Select',
                            help: 'This is a required select element.',
                            options: singleSelectOptions,
                            required: true
                        }),
                        _react2.default.createElement(Select, {
                            name: 'select2',
                            value: ['a', 'c'],
                            label: 'Select (multiple)',
                            help: 'Here, “Option A” and “Option C” are initially selected.',
                            options: selectOptions,
                            multiple: true
                        })
                    ),
                    _react2.default.createElement(
                        'fieldset',
                        null,
                        _react2.default.createElement(
                            'legend',
                            null,
                            'Checkboxes'
                        ),
                        _react2.default.createElement(Checkbox, {
                            name: 'checkbox1',
                            value: true,
                            label: 'Check me out',
                            rowLabel: 'Checkbox (single)'
                        }),
                        _react2.default.createElement(CheckboxGroup, {
                            name: 'checkboxGrp1',
                            value: ['a', 'c'],
                            label: 'Checkbox group (stacked)',
                            help: 'Here, “Option A” and “Option C” are initially selected.',
                            options: radioOptions
                        })
                    ),
                    _react2.default.createElement(
                        'fieldset',
                        null,
                        _react2.default.createElement(
                            'legend',
                            null,
                            'Radio group'
                        ),
                        _react2.default.createElement(RadioGroup, {
                            name: 'radioGrp1',
                            value: 'b',
                            label: 'Radio group (stacked)',
                            help: 'Here, “Option B” is initially selected.',
                            options: radioOptions
                        }),
                        _react2.default.createElement(RadioGroup, {
                            name: 'radioGrp2',
                            type: 'inline',
                            label: 'Radio group (inline)',
                            help: 'This is a required radio group.',
                            options: radioOptions,
                            required: true
                        }),
                        _react2.default.createElement(RadioGroup, {
                            name: 'radioGrp3',
                            type: 'inline',
                            label: 'Radio group (disabled)',
                            help: 'Here, “Option B” is disabled.',
                            options: radioOptionsDisabled
                        })
                    ),
                    _react2.default.createElement(
                        'fieldset',
                        null,
                        _react2.default.createElement(
                            'legend',
                            null,
                            'Layout tweaks'
                        ),
                        _react2.default.createElement(Input, {
                            name: 'cssRowTweak',
                            value: '',
                            label: 'This row is yellow',
                            type: 'text',
                            placeholder: 'the rowClassName property is ‘yellow’',
                            rowClassName: 'yellow',
                            help: 'You can modify the class name for the row.'
                        }),
                        _react2.default.createElement(Input, {
                            name: 'cssWrapperTweaks',
                            value: '',
                            label: 'Label and element wrapper',
                            type: 'text',
                            placeholder: 'Label is ‘col-sm-5’, element-wrapper is ‘col-sm-7’',
                            labelClassName: [{ 'col-sm-3': false }, 'col-sm-5'],
                            elementWrapperClassName: [{ 'col-sm-9': false }, 'col-sm-7'],
                            help: 'The label and element-wrapper classes can be changed.'
                        })
                    ),
                    _react2.default.createElement(
                        'fieldset',
                        null,
                        _react2.default.createElement(
                            'legend',
                            null,
                            'Disabled'
                        ),
                        _react2.default.createElement(Input, {
                            name: 'disabled',
                            value: 'This field is always disabled.',
                            label: 'Disabled',
                            type: 'text',
                            disabled: true,
                            help: 'The disabled prop on this component is set to true.'
                        })
                    ),
                    _react2.default.createElement(
                        'fieldset',
                        null,
                        _react2.default.createElement(
                            'legend',
                            null,
                            'Input groups'
                        ),
                        _react2.default.createElement(Input, {
                            name: 'addon-before',
                            value: '',
                            label: 'Add-on before',
                            type: 'text',
                            addonBefore: _react2.default.createElement('span', { className: 'glyphicon glyphicon-search' })
                        }),
                        _react2.default.createElement(Input, {
                            name: 'addon-after',
                            value: '',
                            label: 'Add-on after',
                            type: 'text',
                            addonAfter: _react2.default.createElement('span', { className: 'glyphicon glyphicon-search' })
                        }),
                        _react2.default.createElement(Input, {
                            name: 'button-before',
                            value: '',
                            label: 'Button before',
                            type: 'text',
                            buttonBefore: _react2.default.createElement(
                                'button',
                                { className: 'btn btn-default', type: 'button' },
                                'Go!'
                            )
                        }),
                        _react2.default.createElement(Input, {
                            name: 'button-after',
                            value: '',
                            label: 'Button after',
                            type: 'text',
                            buttonAfter: _react2.default.createElement(
                                'button',
                                { className: 'btn btn-default', type: 'button' },
                                'Go!'
                            )
                        })
                    ),
                    _react2.default.createElement(
                        'fieldset',
                        null,
                        _react2.default.createElement(
                            Row,
                            { layout: this.state.layout },
                            _react2.default.createElement('input', { className: 'btn btn-default', onClick: this.resetForm, type: 'reset', defaultValue: 'Reset' }),
                            ' ',
                            _react2.default.createElement('input', { className: 'btn btn-primary', formNoValidate: true, type: 'submit', defaultValue: 'Submit' })
                        )
                    )
                )
            );
        }
    }]);

    return Playground;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Playground, null), document.getElementById('playground'));

},{"./options":2,"formsy-react":"formsy-react","formsy-react-components":"formsy-react-components","react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _formsyReactComponents = require('formsy-react-components');

var _formsyReactComponents2 = _interopRequireDefault(_formsyReactComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = _formsyReactComponents2.default.Checkbox;
var RadioGroup = _formsyReactComponents2.default.RadioGroup;
var ParentContextMixin = _formsyReactComponents2.default.ParentContextMixin;


var Options = _react2.default.createClass({
    displayName: 'Options',


    mixins: [ParentContextMixin],

    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'well' },
            _react2.default.createElement(
                _formsyReact2.default.Form,
                { className: this.getLayoutClassName() },
                _react2.default.createElement(RadioGroup, {
                    name: 'layout',
                    type: 'inline',
                    label: 'layout',
                    value: this.props.layoutChoice,
                    options: [{ value: 'horizontal', label: _react2.default.createElement(
                            'code',
                            null,
                            'horizontal'
                        ) }, { value: 'vertical', label: _react2.default.createElement(
                            'code',
                            null,
                            'vertical'
                        ) }, { value: 'elementOnly', label: _react2.default.createElement(
                            'code',
                            null,
                            'elementOnly'
                        ) }],
                    onChange: this.props.changeOption
                }),
                _react2.default.createElement(Checkbox, {
                    name: 'validatePristine',
                    value: this.props.validatePristineChoice,
                    onChange: this.props.changeOption,
                    label: 'Yes',
                    rowLabel: 'validatePristine'
                }),
                _react2.default.createElement(Checkbox, {
                    name: 'disabled',
                    value: this.props.disabledChoice,
                    onChange: this.props.changeOption,
                    label: 'Yes',
                    rowLabel: 'disabled'
                })
            )
        );
    }
});

module.exports = Options;

},{"formsy-react":"formsy-react","formsy-react-components":"formsy-react-components","react":"react"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwbGF5Z3JvdW5kL3NyYy9hcHAuanMiLCJwbGF5Z3JvdW5kL3NyYy9vcHRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ01PO0lBQVU7SUFBZTtJQUFPO0lBQVk7SUFBSztJQUFRO0lBQU07OztBQUV0RSxJQUFNLFNBQVMsZ0JBQU0sV0FBTixDQUFrQjs7OztBQUU3QixZQUFRLENBQUMsZ0NBQUksa0JBQUosQ0FBVDs7QUFFQSw4QkFBUztBQUNMLGVBQ0k7a0NBQVEsSUFBUjs7QUFDSSwyQkFBVyxLQUFLLGtCQUFMLEVBQVg7ZUFDSSxLQUFLLEtBQUw7QUFDSixxQkFBSSxRQUFKO2NBSEo7WUFLSyxLQUFLLEtBQUwsQ0FBVyxRQUFYO1NBTlQsQ0FESztLQUpvQjtDQUFsQixDQUFUOztJQWtCQTs7O0FBRUYsYUFGRSxVQUVGLENBQVksS0FBWixFQUFtQjs4QkFGakIsWUFFaUI7Ozs7MkVBRmpCLHVCQUdRLFFBRFM7O0FBSWYsY0FBSyxLQUFMLEdBQWE7QUFDVCxvQkFBUSxZQUFSO0FBQ0EsOEJBQWtCLEtBQWxCO0FBQ0Esc0JBQVUsS0FBVjtTQUhKOzs7QUFKZSxhQVdmLENBQUssWUFBTCxHQUFvQixNQUFLLFlBQUwsQ0FBa0IsSUFBbEIsT0FBcEIsQ0FYZTtBQVlmLGNBQUssVUFBTCxHQUFrQixNQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsT0FBbEIsQ0FaZTtBQWFmLGNBQUssU0FBTCxHQUFpQixNQUFLLFNBQUwsQ0FBZSxJQUFmLE9BQWpCLENBYmU7O0tBQW5COztpQkFGRTs7b0NBa0JVOztBQUVSLGdCQUFNLFNBQVMsS0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixJQUFqQixDQUFzQixNQUF0QixDQUZQO0FBR1IsbUJBQU8sS0FBUCxHQUhROzs7O21DQU1ELE1BQU07QUFDYixvQkFBUSxHQUFSLENBQVks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LDhCQUFTO0FBQ0wsZUFDSTs7Y0FBSyxXQUFVLE1BQVYsRUFBTDtZQUNJO3NDQUFRLElBQVI7a0JBQWEsV0FBVyxLQUFLLGtCQUFMLEVBQVgsRUFBYjtnQkFDSSw4QkFBQyxVQUFEO0FBQ0ksMEJBQUssUUFBTDtBQUNBLDBCQUFLLFFBQUw7QUFDQSwyQkFBTSxRQUFOO0FBQ0EsMkJBQU8sS0FBSyxLQUFMLENBQVcsWUFBWDtBQUNQLDZCQUFTLENBQ0wsRUFBQyxPQUFPLFlBQVAsRUFBcUIsT0FBTzs7Ozt5QkFBUCxFQURqQixFQUVMLEVBQUMsT0FBTyxVQUFQLEVBQW1CLE9BQU87Ozs7eUJBQVAsRUFGZixFQUdMLEVBQUMsT0FBTyxhQUFQLEVBQXNCLE9BQU87Ozs7eUJBQVAsRUFIbEIsQ0FBVDtBQUtBLDhCQUFVLEtBQUssS0FBTCxDQUFXLFlBQVg7aUJBVmQsQ0FESjtnQkFhSSw4QkFBQyxRQUFEO0FBQ0ksMEJBQUssa0JBQUw7QUFDQSwyQkFBTyxLQUFLLEtBQUwsQ0FBVyxzQkFBWDtBQUNQLDhCQUFVLEtBQUssS0FBTCxDQUFXLFlBQVg7QUFDViwyQkFBTSxLQUFOO0FBQ0EsOEJBQVMsa0JBQVQ7aUJBTEosQ0FiSjtnQkFvQkksOEJBQUMsUUFBRDtBQUNJLDBCQUFLLFVBQUw7QUFDQSwyQkFBTyxLQUFLLEtBQUwsQ0FBVyxjQUFYO0FBQ1AsOEJBQVUsS0FBSyxLQUFMLENBQVcsWUFBWDtBQUNWLDJCQUFNLEtBQU47QUFDQSw4QkFBUyxVQUFUO2lCQUxKLENBcEJKO2FBREo7U0FESixDQURLO0tBSnFCO0NBQWxCLENBQVY7O0FBd0NOLE9BQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgRm9ybXN5IGZyb20gJ2Zvcm1zeS1yZWFjdCc7XG5pbXBvcnQgRlJDIGZyb20gJ2Zvcm1zeS1yZWFjdC1jb21wb25lbnRzJztcbmltcG9ydCBPcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5cbmNvbnN0IHtDaGVja2JveCwgQ2hlY2tib3hHcm91cCwgSW5wdXQsIFJhZGlvR3JvdXAsIFJvdywgU2VsZWN0LCBGaWxlLCBUZXh0YXJlYX0gPSBGUkM7XG5cbmNvbnN0IE15Rm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIG1peGluczogW0ZSQy5QYXJlbnRDb250ZXh0TWl4aW5dLFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm1zeS5Gb3JtXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLmdldExheW91dENsYXNzTmFtZSgpfVxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIHJlZj1cImZvcm1zeVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L0Zvcm1zeS5Gb3JtPlxuICAgICAgICApO1xuICAgIH1cblxufSk7XG5cbmNsYXNzIFBsYXlncm91bmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIC8vIERlZmF1bHQgc3RhdGVcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxheW91dDogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgdmFsaWRhdGVQcmlzdGluZTogZmFsc2UsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBCaW5kIHRoaXNcbiAgICAgICAgdGhpcy5jaGFuZ2VPcHRpb24gPSB0aGlzLmNoYW5nZU9wdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXNldEZvcm0gPSB0aGlzLnJlc2V0Rm9ybS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBuYXN0eVxuICAgICAgICBjb25zdCBmb3Jtc3kgPSB0aGlzLnJlZnMubXlmb3JtLnJlZnMuZm9ybXN5O1xuICAgICAgICBmb3Jtc3kucmVzZXQoKTtcbiAgICB9XG5cbiAgICBzdWJtaXRGb3JtKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcywgZGF0YSk7XG4gICAgfVxuXG4gICAgY2hhbmdlT3B0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IHt9O1xuICAgICAgICBuZXdTdGF0ZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdmFyIHJhZGlvT3B0aW9ucyA9IFtcbiAgICAgICAgICAgIHt2YWx1ZTogJ2EnLCBsYWJlbDogJ09wdGlvbiBBJ30sXG4gICAgICAgICAgICB7dmFsdWU6ICdiJywgbGFiZWw6ICdPcHRpb24gQid9LFxuICAgICAgICAgICAge3ZhbHVlOiAnYycsIGxhYmVsOiAnT3B0aW9uIEMnfVxuICAgICAgICBdO1xuXG4gICAgICAgIHZhciByYWRpb09wdGlvbnNEaXNhYmxlZCA9IFtcbiAgICAgICAgICAgIHt2YWx1ZTogJ2EnLCBsYWJlbDogJ09wdGlvbiBBJ30sXG4gICAgICAgICAgICB7dmFsdWU6ICdiJywgbGFiZWw6ICdPcHRpb24gQicsIGRpc2FibGVkOiB0cnVlfSxcbiAgICAgICAgICAgIHt2YWx1ZTogJ2MnLCBsYWJlbDogJ09wdGlvbiBDJ31cbiAgICAgICAgXTtcblxuICAgICAgICB2YXIgb3B0aW9uWSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiAneScsXG4gICAgICAgICAgICBsYWJlbDogJ09wdGlvbiBZICh5ZWxsb3cgY3NzIGNsYXNzKScsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd5ZWxsb3cnXG4gICAgICAgIH07XG4gICAgICAgIG9wdGlvbllbJ2RhdGEtbm90ZSddID0gJ1RoaXMgaXMgYSBkYXRhIGF0dHJpYnV0ZS4nO1xuICAgICAgICB2YXIgc2VsZWN0T3B0aW9ucyA9IFtcbiAgICAgICAgICAgIHt2YWx1ZTogJ2EnLCBsYWJlbDogJ09wdGlvbiBBJ30sXG4gICAgICAgICAgICB7dmFsdWU6ICdhJywgbGFiZWw6ICdPcHRpb24gQSAoYWdhaW4pJ30sXG4gICAgICAgICAgICB7dmFsdWU6ICdiJywgbGFiZWw6ICdPcHRpb24gQid9LFxuICAgICAgICAgICAge3ZhbHVlOiAnYycsIGxhYmVsOiAnT3B0aW9uIEMnfSxcbiAgICAgICAgICAgIHt2YWx1ZTogJ2QnLCBsYWJlbDogJ09wdGlvbiBEJywgZGlzYWJsZWQ6IHRydWV9LFxuICAgICAgICAgICAgb3B0aW9uWVxuICAgICAgICBdO1xuXG4gICAgICAgIHZhciBzaW5nbGVTZWxlY3RPcHRpb25zID0gc2VsZWN0T3B0aW9ucy5zbGljZSgwKTtcbiAgICAgICAgc2luZ2xlU2VsZWN0T3B0aW9ucy51bnNoaWZ0KHt2YWx1ZTogJycsIGxhYmVsOiAnUGxlYXNlIHNlbGVjdOKApid9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5Gb3JtIFBsYXlncm91bmQgIChCb290c3RyYXAgdjQpPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDM+T3B0aW9uc+KApjwvaDM+XG4gICAgICAgICAgICAgICAgPE9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0Q2hvaWNlPXt0aGlzLnN0YXRlLmxheW91dH1cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVQcmlzdGluZUNob2ljZT17dGhpcy5zdGF0ZS52YWxpZGF0ZVByaXN0aW5lfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZENob2ljZT17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlT3B0aW9uPXt0aGlzLmNoYW5nZU9wdGlvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkxheW91dDogPGNvZGU+e3RoaXMuc3RhdGUubGF5b3V0fTwvY29kZT48L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxNeUZvcm1cbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX1cbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PXt0aGlzLnN0YXRlLmxheW91dH1cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVQcmlzdGluZT17dGhpcy5zdGF0ZS52YWxpZGF0ZVByaXN0aW5lfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgcmVmPVwibXlmb3JtXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+SW5wdXQgdHlwZXM8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWNyZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiSSdtIGhpZGRlbiFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZXh0MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhcnRpc2FuQ3JhZnRlZEJlc3Bva2VJZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGVyZSBpcyBhIHRleHQgaW5wdXQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiVGhpcyBpcyBhIHJlcXVpcmVkIHRleHQgaW5wdXQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkYXRlWzBdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaGlzIGlzIGEgZGF0ZSBpbnB1dC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGhpcyBpcyBhbiBlbWFpbCBpbnB1dC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJUaGlzIGVtYWlsIGZpZWxkIHNob3VsZCBub3QgYXV0b2NvbXBsZXRlLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9XCJpc0VtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1haWw6ICdUaGlzIGRvZXNu4oCZdCBsb29rIGxpa2UgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9XCJtaW5MZW5ndGg6OFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yPVwiWW91ciBwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycyBsb25nLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz1cImVxdWFsc0ZpZWxkOnBhc3N3b3JkMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcXVhbHNGaWVsZDogJ1Bhc3N3b3JkcyBtdXN0IG1hdGNoLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmV0eXBlIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb2xvdXIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbG91ciBpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIjMDAwMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz1cImVxdWFsczojMDAwMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3I9XCJZb3UgY2FuIGhhdmUgYW55IGNvbG9yLCBhcyBsb25nIGFzIGl0J3MgYmxhY2suXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYW5nZTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmFuZ2UgaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmlsZSBwaWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJXYXJuaW5nOiB0aGlzIHJldHVybnMgYSBGaWxlTGlzdCB0aGF0IHdpbGwgbmVlZCBjdXN0b20gY29kaW5nIHRvIGJlIHVzZWZ1bC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPlRleHRhcmVhPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9ezQwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0eHRBcmVhMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaGlzIGZpZWxkIHJlcXVpcmVzIDEwIGNoYXJhY3RlcnMuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiVGhpcyBpcyBzb21lIGhlbHAgdGV4dCBmb3IgdGhlIHRleHRhcmVhLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9XCJtaW5MZW5ndGg6MTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAnUGxlYXNlIHByb3ZpZGUgYXQgbGVhc3QgMTAgY2hhcmFjdGVycy4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+U2VsZWN0PC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbGVjdDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiVGhpcyBpcyBhIHJlcXVpcmVkIHNlbGVjdCBlbGVtZW50LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17c2luZ2xlU2VsZWN0T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1snYScsICdjJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWxlY3QgKG11bHRpcGxlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkhlcmUsIOKAnE9wdGlvbiBB4oCdIGFuZCDigJxPcHRpb24gQ+KAnSBhcmUgaW5pdGlhbGx5IHNlbGVjdGVkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17c2VsZWN0T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5DaGVja2JveGVzPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hlY2tib3gxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNoZWNrIG1lIG91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93TGFiZWw9XCJDaGVja2JveCAoc2luZ2xlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94R3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hlY2tib3hHcnAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17WydhJywgJ2MnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNoZWNrYm94IGdyb3VwIChzdGFja2VkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkhlcmUsIOKAnE9wdGlvbiBB4oCdIGFuZCDigJxPcHRpb24gQ+KAnSBhcmUgaW5pdGlhbGx5IHNlbGVjdGVkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5SYWRpbyBncm91cDwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9HcnAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmFkaW8gZ3JvdXAgKHN0YWNrZWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiSGVyZSwg4oCcT3B0aW9uIELigJ0gaXMgaW5pdGlhbGx5IHNlbGVjdGVkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvR3JwMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImlubGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSYWRpbyBncm91cCAoaW5saW5lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIlRoaXMgaXMgYSByZXF1aXJlZCByYWRpbyBncm91cC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvR3JwM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImlubGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSYWRpbyBncm91cCAoZGlzYWJsZWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiSGVyZSwg4oCcT3B0aW9uIELigJ0gaXMgZGlzYWJsZWQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnNEaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+TGF5b3V0IHR3ZWFrczwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNzc1Jvd1R3ZWFrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUaGlzIHJvdyBpcyB5ZWxsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRoZSByb3dDbGFzc05hbWUgcHJvcGVydHkgaXMg4oCYeWVsbG934oCZXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dDbGFzc05hbWU9XCJ5ZWxsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJZb3UgY2FuIG1vZGlmeSB0aGUgY2xhc3MgbmFtZSBmb3IgdGhlIHJvdy5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjc3NXcmFwcGVyVHdlYWtzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMYWJlbCBhbmQgZWxlbWVudCB3cmFwcGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYWJlbCBpcyDigJhjb2wtc20tNeKAmSwgZWxlbWVudC13cmFwcGVyIGlzIOKAmGNvbC1zbS034oCZXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENsYXNzTmFtZT17W3snY29sLXNtLTMnOiBmYWxzZX0sICdjb2wtc20tNSddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRXcmFwcGVyQ2xhc3NOYW1lPXtbeydjb2wtc20tOSc6IGZhbHNlfSwgJ2NvbC1zbS03J119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIlRoZSBsYWJlbCBhbmQgZWxlbWVudC13cmFwcGVyIGNsYXNzZXMgY2FuIGJlIGNoYW5nZWQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+RGlzYWJsZWQ8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJUaGlzIGZpZWxkIGlzIGFsd2F5cyBkaXNhYmxlZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiVGhlIGRpc2FibGVkIHByb3Agb24gdGhpcyBjb21wb25lbnQgaXMgc2V0IHRvIHRydWUuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+SW5wdXQgZ3JvdXBzPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkb24tYmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZGQtb24gYmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25CZWZvcmU9ezxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkb24tYWZ0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFkZC1vbiBhZnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9ezxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYnV0dG9uLWJlZm9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQnV0dG9uIGJlZm9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkJlZm9yZT17PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiB0eXBlPVwiYnV0dG9uXCI+R28hPC9idXR0b24+fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJidXR0b24tYWZ0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJ1dHRvbiBhZnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkFmdGVyPXs8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIHR5cGU9XCJidXR0b25cIj5HbyE8L2J1dHRvbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGxheW91dD17dGhpcy5zdGF0ZS5sYXlvdXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXt0aGlzLnJlc2V0Rm9ybX0gdHlwZT1cInJlc2V0XCIgZGVmYXVsdFZhbHVlPVwiUmVzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGZvcm1Ob1ZhbGlkYXRlPXt0cnVlfSB0eXBlPVwic3VibWl0XCIgZGVmYXVsdFZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvTXlGb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPFBsYXlncm91bmQgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXlncm91bmQnKVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybXN5IGZyb20gJ2Zvcm1zeS1yZWFjdCc7XG5pbXBvcnQgRlJDIGZyb20gJ2Zvcm1zeS1yZWFjdC1jb21wb25lbnRzJztcblxuY29uc3Qge0NoZWNrYm94LCBSYWRpb0dyb3VwLCBQYXJlbnRDb250ZXh0TWl4aW59ID0gRlJDO1xuXG5jb25zdCBPcHRpb25zID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgbWl4aW5zOiBbUGFyZW50Q29udGV4dE1peGluXSxcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsbFwiPlxuICAgICAgICAgICAgICAgIDxGb3Jtc3kuRm9ybSBjbGFzc05hbWU9e3RoaXMuZ2V0TGF5b3V0Q2xhc3NOYW1lKCl9PlxuICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxheW91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW5saW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwibGF5b3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmxheW91dENob2ljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6ICdob3Jpem9udGFsJywgbGFiZWw6IDxjb2RlPmhvcml6b250YWw8L2NvZGU+fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6ICd2ZXJ0aWNhbCcsIGxhYmVsOiA8Y29kZT52ZXJ0aWNhbDwvY29kZT59LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogJ2VsZW1lbnRPbmx5JywgbGFiZWw6IDxjb2RlPmVsZW1lbnRPbmx5PC9jb2RlPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VPcHRpb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZhbGlkYXRlUHJpc3RpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsaWRhdGVQcmlzdGluZUNob2ljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZU9wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0xhYmVsPVwidmFsaWRhdGVQcmlzdGluZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmRpc2FibGVkQ2hvaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlT3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93TGFiZWw9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Gb3Jtc3kuRm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9wdGlvbnM7XG4iXX0=
