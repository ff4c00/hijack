set nocp
set ru
syntax on
set number
set autoindent
filetype on
set showmatch
set matchtime=5

"禁用折叠功能
set nofoldenable

"设置缩进
set cindent
set tabstop=2
set shiftwidth=2
"自动缩进
set smartindent

"每次退出插入模式时自动保存
"待解决: 普通模式下操作自动保存以及普通模式下禁用中文
au InsertLeave *.* write       
"au NormalLeave *.* write  

"快捷键切换tab
"设置 <leader>0-9 来快速切换tab（默认leader是反斜杠，即先按下\键，再按数字键）
"参考链接: https://zhuanlan.zhihu.com/p/20902166
noremap <silent><tab>n :tabnew<cr>
noremap <silent><tab>c :tabclose<cr>
noremap <silent><tab>N :tabn<cr>
noremap <silent><tab>p :tabp<cr>
noremap <silent><leader>t :tabnew<cr>
noremap <silent><leader>g :tabclose<cr>
noremap <silent><leader>1 :tabn 1<cr>
noremap <silent><leader>2 :tabn 2<cr>
noremap <silent><leader>3 :tabn 3<cr>
noremap <silent><leader>4 :tabn 4<cr>
noremap <silent><leader>5 :tabn 5<cr>
noremap <silent><leader>6 :tabn 6<cr>
noremap <silent><leader>7 :tabn 7<cr>
noremap <silent><leader>8 :tabn 8<cr>
noremap <silent><leader>9 :tabn 9<cr>
noremap <silent><leader>0 :tabn 10<cr>
noremap <silent><s-tab> :tabnext<CR>
inoremap <silent><s-tab> <ESC>:tabnext<CR>
"快捷键切换tab end 

"根据文件类型加载插件
filetype plugin on

"实时搜索
set incsearch

"F11进入粘贴模式
set pastetoggle=<F11>

"启用自动补全
filetype plugin indent on

"自动对齐
set autoindent

"鼠标可用
set mouse=a

"编码格式
set encoding=utf-8

"突出显示当前行
set cursorline


"配色主题:molokai
let g:molokai_original = 1
let g:rehash256 = 1

" Switch syntax highlighting on, when the terminal has colors
" if (t_Co > 2 || has("gui_running")) && !exists("syntax_on")
" 	syntax on
" endif

" Javascript syntax hightlight
syntax enable

"Set syntax highlighting for specific file types
autocmd BufRead,BufNewFile Appraisals set filetype=ruby
autocmd BufRead,BufNewFile *.md set filetype=markdown
autocmd Syntax javascript set syntax=jquery

"Color scheme
colorscheme molokai
highlight NonText guibg=#060606
highlight Folded  guibg=#0A0A0A guifg=#9090D0

"molokai end

call plug#begin('~/.vim/plugged')
	" Make sure you use single quotes
	" Shorthand notation; fetches https://github.com/junegunn/vim-easy-align
	Plug 'junegunn/vim-easy-align'

	" Any valid git URL is allowed
	Plug 'https://github.com/junegunn/vim-github-dashboard.git'

	" Multiple Plug commands can be written in a single line using | separators
	Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'

	" On-demand loading
	Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }
	Plug 'tpope/vim-fireplace', { 'for': 'clojure' }

	" Using a non-master branch
	Plug 'rdnetto/YCM-Generator', { 'branch': 'stable' }

	" Using a tagged release; wildcard allowed (requires git 1.9.2 or above)
	Plug 'fatih/vim-go', { 'tag': '*' }

	" Plugin options
	Plug 'nsf/gocode', { 'tag': 'v.20150303', 'rtp': 'vim' }

	" Plugin outside ~/.vim/plugged with post-update hook
	Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }

	" Unmanaged plugin (manually installed and updated)
	Plug '~/my-prototype-plugin'

	"树形目录
	Plug 'scrooloose/nerdtree'
	Plug 'jistr/vim-nerdtree-tabs'
	Plug 'Xuyuanp/nerdtree-git-plugin'
	autocmd vimenter * NERDTree
	let NERDTreeShowHidden=1
	"设置NERD过滤文件
	"let NERDTreeIgnore=['\.vim$', '\~$', '\.']
	let NERDTreeIgnore=['\.vim$', '\~$']
	let g:NERDTreeShowIgnoredStatus = 1
	let g:nerdtree_tabs_open_on_console_startup=1
	let g:NERDTreeIndicatorMapCustom = {
			\ "Modified"  : "✹",
			\ "Staged"    : "✚",
			\ "Untracked" : "✭",
			\ "Renamed"   : "➜",
			\ "Unmerged"  : "═",
			\ "Deleted"   : "✖",
			\ "Dirty"     : "✗",
			\ "Clean"     : "✔︎",
			\ 'Ignored'   : '☒',
			\ "Unknown"   : "?"
			\ }
	" 设置<F5> 关闭打开NerdTree
	map <F5> :NERDTreeMirror<CR>
	map <F5> :NERDTreeToggle<CR>
	"窗口位置
	let g:NERDTreeWinPos='left'
	"窗口尺寸
	let g:NERDTreeSize=30
	"窗口是否显示行号
	let g:NERDTreeShowLineNumbers=1
	"不显示隐藏文件
	let g:NERDTreeHidden=0
	"打开vim时如果没有文件自动打开NERDTree
	autocmd vimenter * if !argc()|NERDTree|endif
	"当NERDTree为剩下的唯一窗口时自动关闭
	autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif
	"打开vim时自动打开NERDTree
	"autocmd vimenter * NERDTree</cr></f5>

	"语法高亮,检查
	Plug 'sheerun/vim-polyglot'
	Plug 'w0rp/ale'
	let g:ale_linters = {
	\    'javascript': ['eslint'],
	\    'css': ['stylelint'],
	\}
	let g:ale_fixers = {
	\    'javascript': ['eslint'],
	\    'css': ['stylelint'],
	\}
	let g:ale_fix_on_save = 1
	let g:ale_sign_column_always = 1
	let g:ale_sign_error = '●'
	let g:ale_sign_warning = '▶'
	nmap <silent> <C-k> <Plug>(ale_previous_wrap)
	nmap <silent> <C-j> <Plug>(ale_next_wrap)

	"路径,代码补全
	Plug 'Valloric/YouCompleteMe'
	Plug 'Raimondi/delimitMate'
	Plug 'Shougo/deoplete.nvim', { 'do': ':UpdateRemotePlugins' }

	"代码,文件搜索
	Plug 'rking/ag.vim'
	Plug 'kien/ctrlp.vim'

	"加强版状态栏
	Plug 'vim-airline/vim-airline'
	Plug 'vim-airline/vim-airline-themes'
	let g:airline_theme='papercolor'

	"代码注释
	Plug 'scrooloose/nerdcommenter'
	let g:NERDSpaceDelims = 1
	let g:NERDDefaultAlign = 'left'
	let g:NERDCustomDelimiters = {
      \ 'javascript': { 'left': '//', 'leftAlt': '/**', 'rightAlt': '*/' },
      \ 'less': { 'left': '/**', 'right': '*/' }
      \ }

	"git
	Plug 'airblade/vim-gitgutter'
	Plug 'tpope/vim-fugitive'

	"html5
	Plug 'othree/html5.vim'

	"css3
	Plug 'hail2u/vim-css3-syntax'
	Plug 'ap/vim-css-color'
	augroup VimCSS3Syntax
	  autocmd!
	  autocmd FileType css setlocal iskeyword+=-
	augroup END

	"js
	Plug 'pangloss/vim-javascript'

	let g:javascript_plugin_jsdoc = 1
	let g:javascript_plugin_ngdoc = 1
	let g:javascript_plugin_flow = 1
	set foldmethod=syntax
	let g:javascript_conceal_function             = "ƒ"
	let g:javascript_conceal_null                 = "ø"
	let g:javascript_conceal_this                 = "@"
	let g:javascript_conceal_return               = "⇚"
	let g:javascript_conceal_undefined            = "¿"
	let g:javascript_conceal_NaN                  = "ℕ"
	let g:javascript_conceal_prototype            = "¶"
	let g:javascript_conceal_static               = "•"
	let g:javascript_conceal_super                = "Ω"
	let g:javascript_conceal_arrow_function       = "⇒"
	let g:javascript_conceal_noarg_arrow_function = ""
	let g:javascript_conceal_underscore_arrow_function = ""
	set conceallevel=1


call plug#end()

" ctrap
set wildignore+=*/tmp/*,*.so,*.swp,*.zip,*.png,*.jpg,*.jpeg,*.gif " MacOSX/Linux
let g:ctrlp_custom_ignore = '\v[\/]\.(git|hg|svn)$'

set laststatus=2 " Always display the status line
set statusline+=%{fugitive#statusline()} "  Git Hotness

