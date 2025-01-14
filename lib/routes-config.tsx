// for page navigation & to sort on leftbar

import {
  BarChartIcon,
  BlocksIcon,
  BookTextIcon,
  CaseSensitiveIcon,
  CheckIcon,
  ChevronRight,
  FileCog2Icon,
  HashIcon,
  ImageIcon,
  MousePointer2Icon,
  WholeWord,
} from "lucide-react";
import React from "react";

export type EachRoute = {
  icon?: React.ReactNode;
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
  nest?: number;
  parentTitle?: string | null;
};

export const ROUTES: EachRoute[] = [
  {
    title: "Multi-step form",
    href: "/multiStepForm",
    icon: <BarChartIcon size={16} />,
  },
  {
    title: "Shared form",
    href: "",
    noLink: true,
    icon: <ChevronRight size={16} />,
    items: [
      {
        title: "Installation",
        href: "/sharedForm/installation",
        icon: <BlocksIcon size={16} />,
      },
      {
        title: "Configuration",
        href: "/sharedForm/configuration",
        icon: <FileCog2Icon size={16} />,
      },
      {
        title: "Components",
        href: "",
        noLink: true,
        icon: <ChevronRight size={16} />,
        items: [
          {
            title: "Form",
            href: "/sharedForm/components/form",
            icon: <BookTextIcon size={16} />,
          },
          {
            title: "Text Field",
            href: "/sharedForm/components/textField",
            icon: <CaseSensitiveIcon size={16} />,
          },
          {
            title: "Number Field",
            href: "/sharedForm/components/numberField",
            icon: <HashIcon size={16} />,
          },
          {
            title: "Boolean Field",
            href: "/sharedForm/components/booleanField",
            icon: <CheckIcon size={16} />,
          },
          {
            title: "Image Field",
            href: "/sharedForm/components/imageField",
            icon: <ImageIcon size={16} />,
          },
          {
            title: "Select Field",
            href: "/sharedForm/components/selectField",
            icon: <MousePointer2Icon size={16} />,
          },
          {
            title: "Textarea Field",
            href: "/sharedForm/components/textareaField",
            icon: <WholeWord size={16} />,
          },
        ],
      },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
