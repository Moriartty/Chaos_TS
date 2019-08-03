import { connect } from 'react-redux';
import ExFormItem from 'components/ExFormItem';
import ExModal from 'components/ExModal';
import { Form } from 'antd';
import * as React from 'react';
import { _Object } from 'customInterface';

interface EditFormProps {
    searchParams?:_Object,
    systemList?:Array<_Object>,
    langList?:Array<_Object>,
    form?:any
}
interface CompProps extends EditFormProps {
    onSearch:Function,
    show?:boolean, 
    onClose:Function
}

const SearchForm:any = Form.create({
    mapPropsToFields: (props:EditFormProps) => {
        const params = props.searchParams;
        return {
            strKey: Form.createFormField({ value: params.strKey }),
            strVal: Form.createFormField({ value: params.strVal }),
            systemId: Form.createFormField({ value: params.systemId }),
            language: Form.createFormField({ value: params.language })
        };
    }
})((props:EditFormProps) => {
    const { form,systemList,langList } = props;
    const { getFieldDecorator } = form;
    return (
        <Form>
            <ExFormItem  label={'strKey'} name={'strKey'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem  label={'strVal'} name={'strVal'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem  type={'select'} list={systemList.map(o=>{
                return {
                    id:o.oid,
                    name:o.name
                }
            })} label={'system'} name={'systemId'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem  type={'select'} list={langList} label={'language'} name={'language'} getFieldDecorator={getFieldDecorator}/>
        </Form>
    );
});

class SearchModal extends React.Component<CompProps> {
    public form:any;
    handleSave = () => {
        const form = this.form;
        form.validateFields((err:any, data:_Object) => {
            if (err) { return; }
            this.props.onSearch(data);
            this.props.onClose();
        });
    }
    saveFormRef = (form:any) => {
        this.form = form;
    }
    render () {
        const { show, onClose,searchParams,systemList,langList} = this.props;
        return (
            <ExModal
                visible={show}
                title={'查询条件'}
                onCancel={onClose}
                onOk={this.handleSave}
            >
                <SearchForm 
                    ref={this.saveFormRef} 
                    searchParams={searchParams}
                    systemList={systemList}
                    langList={langList}
                    />
            </ExModal>
        );
    }
}

const SearchModalComp = connect((state:any) => {
    const {langList} = state['app'];
    const { searchParams,systemList } = state['fieldTranslation'];
    return { searchParams,systemList,langList };
}, null)(SearchModal);

export default SearchModalComp;
