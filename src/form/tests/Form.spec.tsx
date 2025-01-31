import { mount } from '@vue/test-utils'
import { h } from 'vue'
import { NInput } from '../../input'
import { NForm, NFormItem } from '../index'

describe('n-form', () => {
  it('should work with import on demand', () => {
    mount(NForm)
  })
  describe('require mark', () => {
    it("doesn't show by default", () => {
      const wrapper = mount(() => (
        <NForm>
          {{
            default: () => {
              return (
                <NFormItem label="star kirby">
                  {{
                    default: () => <NInput />
                  }}
                </NFormItem>
              )
            }
          }}
        </NForm>
      ))
      expect(wrapper.find('.n-form-item-label__asterisk').exists()).toEqual(
        false
      )
    })
    it('shows when props.showRequireMark is set', () => {
      const wrapper = mount(() => (
        <NForm>
          {{
            default: () => {
              return (
                <NFormItem showRequireMark label="star kirby">
                  {{
                    default: () => <NInput />
                  }}
                </NFormItem>
              )
            }
          }}
        </NForm>
      ))
      expect(wrapper.find('.n-form-item-label__asterisk').exists()).toEqual(
        true
      )
    })
    it('shows when required rule is set in form', () => {
      const wrapper = mount(() => (
        <NForm rules={{ starKirby: { required: true } }}>
          {{
            default: () => {
              return (
                <NFormItem label="star kirby" path="starKirby">
                  {{
                    default: () => <NInput />
                  }}
                </NFormItem>
              )
            }
          }}
        </NForm>
      ))
      expect(wrapper.find('.n-form-item-label__asterisk').exists()).toEqual(
        true
      )
    })
    it('shows when required rule is set in form item', () => {
      const wrapper = mount(() => (
        <NForm>
          {{
            default: () => {
              return (
                <NFormItem label="star kirby" rule={{ required: true }}>
                  {{
                    default: () => <NInput />
                  }}
                </NFormItem>
              )
            }
          }}
        </NForm>
      ))
      expect(wrapper.find('.n-form-item-label__asterisk').exists()).toEqual(
        true
      )
    })
  })

  it('should work with `show-label` prop', async () => {
    let wrapper = mount(NForm, {
      slots: {
        default: () =>
          [1, 2, 3].map((num) => (
            <NFormItem label={`label${num}`}>
              {{
                default: () => <NInput />
              }}
            </NFormItem>
          ))
      }
    })
    // show-label default is true in component
    expect(wrapper.findAll('.n-form-item-label').length).toBe(3)
    expect(wrapper.findAll('.n-form-item--no-label').length).toBe(0)

    await wrapper.setProps({ showLabel: true })
    expect(wrapper.findAll('.n-form-item-label').length).toBe(3)
    expect(wrapper.findAll('.n-form-item--no-label').length).toBe(0)

    await wrapper.setProps({ showLabel: false })
    expect(wrapper.findAll('.n-form-item-label').length).toBe(0)
    expect(wrapper.findAll('.n-form-item--no-label').length).toBe(3)

    // The NFormItem show-label has a higher weight than the NForm
    wrapper = mount(NForm, {
      props: { showLabel: true },
      slots: {
        default: () => (
          <NFormItem label="label" show-label={false}>
            {{
              default: () => <NInput />
            }}
          </NFormItem>
        )
      }
    })
    expect(
      wrapper.find('.n-form-item').classes().includes('n-form-item--no-label')
    ).toBe(true)
    expect(wrapper.findAll('.n-form-item-label').length).toBe(0)
  })
})
