import svgPaths from "./svg-ialceqlsxc";
import imgIconSmallFolder from "figma:asset/e64598e892cbd0c8dc889d7ac0a91cfc9dcc5add.png";
import imgIconBigFile from "figma:asset/6344022ab6e9a93ea2baa548c4abb278def7caf0.png";
import imgIconBigFiles from "figma:asset/04f2e1b43589471b90bca2f72d21dd5df12b70be.png";
import imgIconBigInternetExplorer from "figma:asset/aff8d28beb3c92b3485e406020ba0b1a7b9440d4.png";
import imgIconBigPrograms from "figma:asset/fb7ef35ccb238fcf82477e0c0cdece90fc94f6db.png";
import imgIconBigMidiFile from "figma:asset/81e03974fc2857bc95d726c1501cef4784ed0917.png";
import imgIconBigScanCd from "figma:asset/2b80ee9c45ba6a01d4a039a38412e059c6859615.png";
import imgIconBigTree from "figma:asset/7bfd58b9e9a351abee2c3d7120a59dec599c8c27.png";
import imgIconBigPaint from "figma:asset/c29411a62dca0690bb2e20075c05fa2aef1d8725.png";

function IconSmallFolder() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon/Small/Folder">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconSmallFolder} />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0" data-name="Label">
      <IconSmallFolder />
      <p className="font-['W95FA:Regular',sans-serif] leading-[13px] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] whitespace-pre">Title</p>
    </div>
  );
}

function UtillityIcons() {
  return (
    <div className="basis-0 grow h-[2px] min-h-px min-w-px relative shrink-0" data-name="Utillity icons">
      <div className="absolute bg-black inset-0" data-name="Minimize" />
    </div>
  );
}

function ButtonWindowButton() {
  return (
    <div className="bg-[silver] content-stretch flex items-end justify-center p-[4px] relative shrink-0 size-[16px]" data-name="Button/Window Button">
      <UtillityIcons />
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_-1px_0px_0px_inset_#000000,1px_1px_0px_0px_inset_#ffffff,-2px_-2px_0px_0px_inset_#7f7f7f,2px_2px_0px_0px_inset_#dfdfdf]" />
    </div>
  );
}

function UtillityIcons1() {
  return (
    <div className="basis-0 grow h-[2px] min-h-px min-w-px relative shrink-0" data-name="Utillity icons">
      <div className="absolute bottom-0 left-1/2 size-[8px] translate-x-[-50%]" data-name="Maximize">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <path clipRule="evenodd" d={svgPaths.p2d6da00} fill="var(--fill-0, black)" fillRule="evenodd" id="Maximize" />
        </svg>
      </div>
    </div>
  );
}

function ButtonWindowButton1() {
  return (
    <div className="bg-[silver] content-stretch flex items-end justify-center p-[4px] relative shrink-0 size-[16px]" data-name="Button/Window Button">
      <UtillityIcons1 />
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_-1px_0px_0px_inset_#000000,1px_1px_0px_0px_inset_#ffffff,-2px_-2px_0px_0px_inset_#7f7f7f,2px_2px_0px_0px_inset_#dfdfdf]" />
    </div>
  );
}

function UtillityIcons2() {
  return (
    <div className="basis-0 grow h-[2px] min-h-px min-w-px relative shrink-0" data-name="Utillity icons">
      <div className="absolute bottom-0 left-1/2 size-[8px] translate-x-[-50%]" data-name="Close">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <path clipRule="evenodd" d={svgPaths.p150a9a80} fill="var(--fill-0, black)" fillRule="evenodd" id="Close" />
        </svg>
      </div>
    </div>
  );
}

function ButtonWindowButton2() {
  return (
    <div className="bg-[silver] content-stretch flex items-end justify-center p-[4px] relative shrink-0 size-[16px]" data-name="Button/Window Button">
      <UtillityIcons2 />
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_-1px_0px_0px_inset_#000000,1px_1px_0px_0px_inset_#ffffff,-2px_-2px_0px_0px_inset_#7f7f7f,2px_2px_0px_0px_inset_#dfdfdf]" />
    </div>
  );
}

function WindowButtons() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="Window buttons">
      <ButtonWindowButton />
      <ButtonWindowButton1 />
      <ButtonWindowButton2 />
    </div>
  );
}

function Titlebar() {
  return (
    <div className="bg-[navy] relative shrink-0 w-full" data-name="Titlebar">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between pl-[4px] pr-[2px] py-[2px] relative w-full">
          <Label />
          <WindowButtons />
        </div>
      </div>
    </div>
  );
}

function IconBigFile() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon/Big/File">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconBigFile} />
    </div>
  );
}

function Item() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Item">
      <IconBigFile />
      <p className="font-['W95FA:Regular',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[11px] text-black text-center w-[min-content]">Label</p>
    </div>
  );
}

function IconBigFiles() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon/Big/Files">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconBigFiles} />
    </div>
  );
}

function Item1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Item">
      <IconBigFiles />
      <p className="font-['W95FA:Regular',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[11px] text-black text-center w-[min-content]">Label</p>
    </div>
  );
}

function IconBigInternetExplorer() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon/Big/Internet Explorer">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[192.31%] left-[-53.85%] max-w-none top-[-46.15%] w-[207.69%]" src={imgIconBigInternetExplorer} />
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Item">
      <IconBigInternetExplorer />
      <p className="font-['W95FA:Regular',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[11px] text-black text-center w-[min-content]">Label</p>
    </div>
  );
}

function IconBigPrograms() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon/Big/Programs">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconBigPrograms} />
    </div>
  );
}

function Item3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Item">
      <IconBigPrograms />
      <p className="font-['W95FA:Regular',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[11px] text-black text-center w-[min-content]">Label</p>
    </div>
  );
}

function ItemRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[315px]" data-name="Item row">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function IconBigMidiFile() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon/Big/MIDI File">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[213.33%] left-[-67.09%] max-w-none top-[-56.67%] w-[237.83%]" src={imgIconBigMidiFile} />
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Item">
      <IconBigMidiFile />
      <p className="font-['W95FA:Regular',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[11px] text-black text-center w-[min-content]">Label</p>
    </div>
  );
}

function IconBigScanCd() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon/Big/Scan CD">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconBigScanCd} />
    </div>
  );
}

function Item5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Item">
      <IconBigScanCd />
      <p className="font-['W95FA:Regular',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[11px] text-black text-center w-[min-content]">Label</p>
    </div>
  );
}

function IconBigTree() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon/Big/Tree">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconBigTree} />
    </div>
  );
}

function Item6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Item">
      <IconBigTree />
      <p className="font-['W95FA:Regular',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[11px] text-black text-center w-[min-content]">Label</p>
    </div>
  );
}

function IconBigPaint() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon/Big/Paint">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconBigPaint} />
    </div>
  );
}

function Item7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Item">
      <IconBigPaint />
      <p className="font-['W95FA:Regular',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[11px] text-black text-center w-[min-content]">Label</p>
    </div>
  );
}

function ItemRow1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[315px]" data-name="Item row">
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
    </div>
  );
}

function Whiteboard() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Whiteboard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
          <ItemRow />
          <ItemRow1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_-1px_0px_0px_inset_#ffffff,1px_1px_0px_0px_inset_#808080,-2px_-2px_0px_0px_inset_#c1c1c1,2px_2px_0px_0px_inset_#000000]" />
    </div>
  );
}

export default function WindowFrameWhiteboard() {
  return (
    <div className="bg-[silver] relative size-full" data-name="Window frame/Whiteboard">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start p-[4px] relative size-full">
          <Titlebar />
          <Whiteboard />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_-1px_0px_0px_inset_#000000,1px_1px_0px_0px_inset_#ffffff,-2px_-2px_0px_0px_inset_#7f7f7f,2px_2px_0px_0px_inset_#dfdfdf]" />
    </div>
  );
}