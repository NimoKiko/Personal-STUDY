# -*- mode: python ; coding: utf-8 -*-

import sys
import os
import tkinter  # 用于处理Tkinter依赖

block_cipher = None

# 添加必要的隐藏导入
hidden_imports = [
    'pandas',
    'numpy',
    'openpyxl',
    'xlrd',
    'xlwt',
    'chardet',
    'tkinter',
    'tkinter.filedialog',
    'tkinter.messagebox',
    'pandas._libs',
    'pandas._libs.tslibs',
    'pandas._libs.skiplist',
    'pandas._libs.index',
    'pandas._libs.internals',
    'pandas._libs.hashtable',
    'pandas._libs.tslibs.base',
    'pandas._libs.tslibs.np_datetime',
    'pandas._libs.tslibs.nattype',
    'pandas._libs.tslibs.offsets',
    'pandas._libs.tslibs.parsing',
    'pandas._libs.tslibs.period',
    'pandas._libs.tslibs.timedeltas',
    'pandas._libs.tslibs.timezones',
    'pandas._libs.tslibs.timestamps',
    'pandas.io.formats.excel',
    'pandas.util',
    'et_xmlfile',
    'jdcal',
    'pytz',
    'six',
    'pyparsing',
    'openpyxl.xml',
]

# 添加必要的二进制文件和数据文件
datas = []
binaries = []

# 添加Tcl/Tk运行时文件（对于Tkinter GUI是必需的）
if sys.platform.startswith('win'):
    import tkinter
    tk_root = tkinter.Tk()
    tcl_dir = os.path.dirname(tk_root.tk.exprstring('$tcl_library'))
    tk_dir = os.path.dirname(tk_root.tk.exprstring('$tk_library'))
    
    datas += [
        (tcl_dir, 'tcl'),
        (tk_dir, 'tk')
    ]


a = Analysis(
    ['excelTool.py'],  # 替换为您的脚本文件名
    pathex=[],
    binaries=binaries,
    datas=datas,
    hiddenimports=hidden_imports,
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[
        'matplotlib',  # 排除不需要的大型库
        'scipy',
        'PyQt5',
        'PySide2',
        'IPython',
        'jupyter',
        'django',
        'flask',
        'tensorflow',
        'torch',
        'notebook',
        'bokeh',
        'plotly',
        'seaborn',
        'sklearn',
        'sqlalchemy',
    ],
    win_no_prefer_redirects=False,
    win_private_assemblies=False,
    cipher=block_cipher,
    noarchive=False,
)

# 添加Pandas所需的数据文件
pandas_dir = os.path.dirname(pd.__file__) if 'pd' in dir() else ''
if pandas_dir:
    a.datas += [
        (os.path.join(pandas_dir, 'io', 'clipboard', 'clipboard.js'), 'pandas/io/clipboard'),
    ]

pyz = PYZ(a.pure, a.zipped_data, cipher=block_cipher)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.zipfiles,
    a.datas,
    [],
    name='报警文件合并工具',  # 可执行文件名称
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,  # 使用UPX压缩（需要安装UPX）
    console=True,  # 设置为False以隐藏控制台窗口
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
)