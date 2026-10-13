"""North-up roof plan rendered from the exported meshes."""
import runpy,sys,pathlib
sys.argv.append('--plan')
runpy.run_path(str(pathlib.Path(__file__).with_name('render_preview.py')),run_name='__main__')
