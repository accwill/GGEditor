import { ItemState } from '@/common/constants';
import { Item, Behavior } from '@/common/interfaces';
import behaviorManager from '@/common/behaviorManager';

interface HoverItemBehavior extends Behavior {
  /** 处理鼠标进入 */
  handleItemMouseenter({ item }: { item: Item }): void;
  /** 处理鼠标移出 */
  handleItemMouseleave({ item }: { item: Item }): void;
}

const hoverItemBehavior: HoverItemBehavior = {
  getEvents() {
    return {
      'node:mouseenter': 'handleItemMouseenter',
      'edge:mouseenter': 'handleItemMouseenter',
      'node:mouseleave': 'handleItemMouseleave',
      'edge:mouseleave': 'handleItemMouseleave',
    };
  },

  handleItemMouseenter({ item }) {
    const { graph } = this;

    const states = item.getStates();
    const stateStyle = item.getStateStyle(ItemState.Active); // 设置hover状态
    if (stateStyle && !states.includes?.(ItemState.Selected)) {
      item.update({ style: stateStyle });
    }
    graph.setItemState(item, ItemState.Active, true);
  },

  handleItemMouseleave({ item }) {
    const { graph } = this;
    const states = item.getStates();
    if (!states.includes?.(ItemState.Selected)) {
      const { originStyle } = item.getModel();
      originStyle && item.update({ style: originStyle });
    }
    graph.setItemState(item, ItemState.Active, false);
  },
};

behaviorManager.register('hover-item', hoverItemBehavior);
