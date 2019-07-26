import { connect } from 'react-redux';
import ExFormItem from 'components/ExFormItem';
import ExModal from 'components/ExModal';
import { Form } from 'antd';
import * as React from 'react';
import { _Object } from 'customInterface';

interface EditFormProps {
    searchParams?:_Object
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
})(props => {
    const { form } = props;
    const { getFieldDecorator } = form;
    return (
        <Form>
            <ExFormItem  label={'strKey'} name={'strKey'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem  label={'strVal'} name={'strVal'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem  label={'system'} name={'systemId'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem  label={'language'} name={'language'} getFieldDecorator={getFieldDecorator}/>
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
        const { show, onClose,searchParams} = this.props;
        return (
            <ExModal
                visible={show}
                title={'查询条件'}
                onCancel={onClose}
                onOk={this.handleSave}
            >
                <SearchForm ref={this.saveFormRef} searchParams={searchParams}/>
            </ExModal>
        );
    }
}

const SearchModalComp = connect((state:any) => {
    const { searchParams } = state['fieldTranslation'];
    return { searchParams };
}, null)(SearchModal);

export default SearchModalComp;
