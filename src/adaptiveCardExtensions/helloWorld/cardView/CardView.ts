import {
  BaseBasicCardView,
  //IBaseCardParameters,
  IBasicCardParameters,
  ICardButton,
  IExternalLinkCardAction,
  IQuickViewCardAction
} from '@microsoft/sp-adaptive-card-extension-base';
//import * as strings from 'HelloWorldAdaptiveCardExtensionStrings';
import {
  IHelloWorldAdaptiveCardExtensionProps,
  IHelloWorldAdaptiveCardExtensionState,
  QUICK_VIEW_REGISTRY_ID,
  NEW_ITEM_QUICK_VIEW_REGISTRY_ID
} from '../HelloWorldAdaptiveCardExtension';
//import * as strings from 'HelloWorldAdaptiveCardExtensionStrings';

export class CardView extends BaseBasicCardView<
  IHelloWorldAdaptiveCardExtensionProps,
  IHelloWorldAdaptiveCardExtensionState
> {
  public get cardButtons(): [ICardButton] | [ICardButton, ICardButton] | undefined {
  if (!this.properties.listId) {
    return undefined;
  } else {
    return [{
        title: 'Add item',
        action: {
          type: 'QuickView',
          parameters: { view: NEW_ITEM_QUICK_VIEW_REGISTRY_ID }
        }
      }];
  }
}
  public get data(): IBasicCardParameters {
      console.log("listTitle:", this.properties.listId);
    return {
      title: this.properties.title,
      primaryText: (this.state.listTitle)
        ? `View items in the '${this.state.listTitle}' list`
        : `Missing list ID`,
    };
  }



  public get onCardSelection(): IQuickViewCardAction | IExternalLinkCardAction | undefined {
    return {
      type: 'QuickView',
      parameters: {
        view: QUICK_VIEW_REGISTRY_ID
      }
    };
  }
}

/*import {
  BaseComponentsCardView,

  ComponentsCardViewParameters,
  BasicCardView,
  IExternalLinkCardAction,
  IQuickViewCardAction
} from '@microsoft/sp-adaptive-card-extension-base';
//import * as strings from 'HelloWorldAdaptiveCardExtensionStrings';
import {
  IHelloWorldAdaptiveCardExtensionProps,
  IHelloWorldAdaptiveCardExtensionState,
  QUICK_VIEW_REGISTRY_ID,
  NEW_ITEM_QUICK_VIEW_REGISTRY_ID
} from '../HelloWorldAdaptiveCardExtension';

export class CardView extends BaseComponentsCardView<
  IHelloWorldAdaptiveCardExtensionProps,
  IHelloWorldAdaptiveCardExtensionState,
  ComponentsCardViewParameters
> {
  public get cardViewParameters(): ComponentsCardViewParameters {
    return BasicCardView({
      cardBar: {
        componentName: 'cardBar',
        title: this.properties.title
      },
      header: {
        componentName: 'text',
        text: (this.state.listTitle)
      ? `View items in the '${this.state.listTitle}' list`
      : `Missing list ID`
      },
      footer: [{
        componentName: 'cardButton',
        title: 'Add item',
        action: {
          type: 'QuickView',
          parameters: {
            view: NEW_ITEM_QUICK_VIEW_REGISTRY_ID
          }
        }
      }, {
        componentName: 'cardButton',
        title: 'Bing',
        action: {
          type: 'ExternalLink',
          parameters: {
            target: 'https://www.bing.com'
          }
        }
      }]
    });
  }

  

  public get onCardSelection(): IQuickViewCardAction | IExternalLinkCardAction | undefined {
    return {
      type: 'QuickView',
      parameters: {
        view: QUICK_VIEW_REGISTRY_ID
      }
    };
  }
}
*/