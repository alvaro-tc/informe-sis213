---
geometry: margin=2.5cm
fontsize: 12pt
mainfont: "Calibri"
sansfont: "Calibri"
monofont: "Consolas"
header-includes: |
  \usepackage{fontspec}
  \usepackage{pdfpages}
  \usepackage{longtable}
  \usepackage{array}
  \usepackage[table]{xcolor}
  \definecolor{headerblue}{RGB}{50, 100, 160}
  \setlength{\arrayrulewidth}{1pt}
  \arrayrulecolor{black}
  \setlength{\tabcolsep}{8pt}
  \renewcommand{\arraystretch}{1.5}
  \usepackage{float}
  \let\origfigure\figure
  \let\endorigfigure\endfigure
  \renewenvironment{figure}[1][2] {
      \expandafter\origfigure\expandafter[H]
  } {
      \endorigfigure
  }
  \usepackage{caption}
  \captionsetup[table]{labelfont=bf,textfont=sf}
  \usepackage{parskip}
  \setlength{\parskip}{3pt}
  \setlength{\parindent}{0pt}
  \usepackage{microtype}
  \usepackage{tocloft}
  \usepackage{enumitem}
  \usepackage{etoolbox}
  \AtBeginEnvironment{itemize}{\setlist[itemize]{itemsep=4pt,parsep=2pt,topsep=4pt,partopsep=0pt,leftmargin=1.2em}}
  \AtBeginEnvironment{enumerate}{\setlist[enumerate]{itemsep=4pt,parsep=2pt,topsep=4pt,partopsep=0pt,leftmargin=1.2em}}
  \renewcommand{\cftsecfont}{\sffamily\bfseries}
  \renewcommand{\cftsecpagefont}{\sffamily\bfseries}
  \renewcommand{\cftsubsecfont}{\sffamily\bfseries}
  \renewcommand{\cftsubsecpagefont}{\sffamily\bfseries}
  \setlength{\cftbeforesecskip}{4pt}
  \setlength{\cftbeforesubsecskip}{2pt}
  \setlength{\cftsecindent}{0pt}
  \setlength{\cftsubsecindent}{1.2em}
  \usepackage{titlesec}
  \titleformat{\section}{\sffamily\Large\bfseries}{\thesection}{1em}{}
  \titleformat{\subsection}{\sffamily\large\bfseries}{\thesubsection}{1em}{}
  \titlespacing*{\section}{0pt}{1.05\baselineskip}{0.45\baselineskip}
  \titlespacing*{\subsection}{0pt}{0.85\baselineskip}{0.3\baselineskip}
  \renewcommand{\familydefault}{\sfdefault}
  \let\maketitle\relax
---

\includepdf[pages=1]{caratula/Caratula.pdf}

\newpage
\pagenumbering{roman}

\begin{center}
  {\sffamily\Large\bfseries Índice}
\end{center}

\begingroup
  \renewcommand{\contentsname}{}
  \tableofcontents
\endgroup

\newpage
\pagenumbering{arabic}