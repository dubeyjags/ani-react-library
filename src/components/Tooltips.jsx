import { AniTooltip } from "./ani-components/AniTooltip"

export const Tooltips = () => {
  return (
    <>
    <div>
        <AniTooltip title="Add" placement="right-end">
            <button>Tooltip</button>
        </AniTooltip>
    </div>
    <div>
        <AniTooltip title="Add" placement="right" arrow>
            <button>Tooltip with arrow</button>
        </AniTooltip>
    </div>
    </>
  )
}
