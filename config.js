/*******************************************************************************
 * Copyright (c) 2012 IBM Corporation.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/

var mkdirp = require('mkdirp');
var path = require('path');

var rootdir = path.dirname(__dirname);
var outdir = path.join(rootdir, 'out', 'jsdelta');

mkdirp.sync(outdir);

// directory in which to create temporary files
exports.tmp_dir = outdir;