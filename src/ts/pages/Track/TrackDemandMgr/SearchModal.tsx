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
            title: Form.createFormField({ value: params.title })
        };
    }
})(props => {
    const { form } = props;
    const { getFieldDecorator } = form;
    return (
        <Form>
            <ExFormItem  label={'Title'} name={'title'} getFieldDecorator={getFieldDecorator}/>
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
    const { trackDemand_searchParams:searchParams } = state['track'];
    return { searchParams };
}, null)(SearchModal);

export default SearchModalComp;
