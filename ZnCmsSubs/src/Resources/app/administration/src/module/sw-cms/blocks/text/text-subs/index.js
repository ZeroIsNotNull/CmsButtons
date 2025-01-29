import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'text-subs',
    category: 'text',
    label: 'Text Subs',
    component: 'sw-cms-block-text-subs',
    previewComponent: 'sw-cms-preview-text-subs',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        subs: {
            type: 'text'
        }
    }
});