import type { WebContainer3D } from '@etherealjs/web-layer/three'

import { createMappedComponent } from '../../ecs/functions/ComponentFunctions'

export type XRUIComponentType = {
  state: any
  container: WebContainer3D
}

export const XRUIComponent = createMappedComponent<XRUIComponentType>('XRUIComponent')
