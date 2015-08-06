<!-- SPACER FOR DOCS IFRAME -->

<div id="documents">
</div>

<!-- DOCUMENT IFRAME -->

<div id="docs_bg">
	
	<div id="pdf_list">
		<ul>
			<?php

			$dir = '../Documents';
			$scan = array_slice(scandir($dir ),2);
			
			foreach($scan as $file)
			{		
				//$file_size = filesize($dir.$file) / 1000;
				//$kb = (int) $file_size; ?>
			
				<li>
					<a target="_blank" href="">
						<img src="<?php bloginfo('template_url'); ?>/img/pdf.png" />
						<a target="_blank" href="">
							<div class="pdf_info">
								<div class="pdf_title"><?php echo $file; ?></div>
								<div class="pdf_size"><?php /*echo $kb . " kb";*/ ?></div>
							</div>
						</a>
					</a>
			    </li>	    
			
			<?php
				}
			?>
		</ul>
	</div>
	
	<!--
	<iframe src="http://couzinetjacques.com/documents/"></iframe>
	
	<div id="img_bckp" style="background-image:url('<?php bloginfo( "template_url" ); ?>/img/bg.png');background-size:cover;width:100%;height:100%;background-position:0px 0px;">
	
	</div>
	-->
	
	
</div>